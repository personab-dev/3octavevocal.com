<?php
/**
 * 수강생 후기 CPT + 리스트 상단 소개 문구 + WPGraphQL 연동
 *
 * WordPress CodeSnippets에 추가할 스니펫
 * - CPT: review (수강생 후기)
 * - 리스트 상단에 소개 문구 편집 영역
 * - WPGraphQL: { reviews { nodes { title reviewFields { externalUrl isHighlight } } } }
 * - WPGraphQL: { reviewsPageSettings { description } }
 */

// ── 1. Review CPT 등록 ──

add_action('init', function () {
    register_post_type('review', [
        'labels' => [
            'name' => '수강생 후기',
            'singular_name' => '후기',
        ],
        'public' => false,
        'publicly_queryable' => true,
        'show_ui' => true,
        'show_in_graphql' => true,
        'graphql_single_name' => 'review',
        'graphql_plural_name' => 'reviews',
        'supports' => ['title', 'page-attributes'],
        'menu_icon' => 'dashicons-format-quote',
    ]);
});

// ── 2. 리스트 컬럼에 순서 표시 ──

add_filter('manage_review_posts_columns', function ($columns) {
    $columns['menu_order'] = '순서';
    return $columns;
});

add_action('manage_review_posts_custom_column', function ($column, $post_id) {
    if ($column === 'menu_order') {
        echo get_post_field('menu_order', $post_id);
    }
}, 10, 2);

add_filter('manage_edit-review_sortable_columns', function ($columns) {
    $columns['menu_order'] = 'menu_order';
    return $columns;
});

// ── 3. 리스트 상단에 소개 문구 편집 영역 ──

add_action('admin_notices', function () {
    $screen = get_current_screen();
    if (!$screen || $screen->id !== 'edit-review') return;

    $description = get_option('reviews_page_description', '7,000명 이상의 수강생을 배출한 3옥타브장인 보컬학원의 생생한 레슨 현장과 후기를 소개합니다.');
    $saved = isset($_GET['reviews_desc_saved']) ? true : false;
    ?>
    <div class="notice" style="background:#fff; border-left:4px solid #2271b1; padding:16px 20px; margin:15px 0;">
        <form method="post" style="margin:0;">
            <?php wp_nonce_field('save_reviews_description', 'reviews_desc_nonce'); ?>
            <label style="display:block; font-weight:600; margin-bottom:8px; font-size:14px;">
                후기 페이지 소개 문구
            </label>
            <textarea name="reviews_page_description" rows="2" style="width:100%; max-width:800px; font-size:14px; padding:8px 12px;"><?php echo esc_textarea($description); ?></textarea>
            <p style="margin:8px 0 0; display:flex; align-items:center; gap:10px;">
                <button type="submit" name="save_reviews_description" class="button button-primary">저장</button>
                <span class="description">사이트에 약 1분 내 반영됩니다.</span>
                <?php if ($saved): ?>
                    <span style="color:#00a32a; font-weight:500;">저장되었습니다.</span>
                <?php endif; ?>
            </p>
        </form>
    </div>
    <?php
});

add_action('admin_init', function () {
    if (!isset($_POST['save_reviews_description'])) return;
    if (!wp_verify_nonce($_POST['reviews_desc_nonce'] ?? '', 'save_reviews_description')) return;
    if (!current_user_can('manage_options')) return;

    $value = sanitize_textarea_field($_POST['reviews_page_description'] ?? '');
    update_option('reviews_page_description', $value);

    wp_safe_redirect(add_query_arg('reviews_desc_saved', '1', admin_url('edit.php?post_type=review')));
    exit;
});

// ── 4. WPGraphQL 필드 등록 ──

add_action('graphql_register_types', function () {
    register_graphql_object_type('ReviewsPageSettings', [
        'description' => '후기 페이지 설정',
        'fields' => [
            'description' => ['type' => 'String', 'description' => '후기 페이지 소개 문구'],
        ],
    ]);

    register_graphql_field('RootQuery', 'reviewsPageSettings', [
        'type' => 'ReviewsPageSettings',
        'description' => '후기 페이지 설정 조회',
        'resolve' => function () {
            return [
                'description' => get_option('reviews_page_description', '7,000명 이상의 수강생을 배출한 3옥타브장인 보컬학원의 생생한 레슨 현장과 후기를 소개합니다.'),
            ];
        },
    ]);
});
