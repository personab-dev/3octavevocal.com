<?php
/**
 * 상담 유형 설정 페이지 + WPGraphQL 연동
 *
 * WordPress CodeSnippets에 추가할 스니펫
 * - 관리자 메뉴: 설정 > 상담 유형 설정
 * - WPGraphQL 쿼리: { consultationSettings { visibility freeLabel freeDescription paidLabel paidDescription footnote } }
 */

// ── 1. 관리자 설정 페이지 등록 ──

add_action('admin_menu', function () {
    add_menu_page(
        '상담 유형 설정',
        '상담 유형 설정',
        'manage_options',
        'consultation-settings',
        'render_consultation_settings_page',
        'dashicons-clipboard',
        27
    );
});

add_action('admin_init', function () {
    register_setting('consultation_settings_group', 'consultation_visibility', [
        'default' => 'both',
        'sanitize_callback' => function ($val) {
            return in_array($val, ['free_only', 'paid_only', 'both']) ? $val : 'both';
        },
    ]);
    register_setting('consultation_settings_group', 'consultation_free_label', [
        'default' => '[무료] 일반 상담',
        'sanitize_callback' => 'sanitize_text_field',
    ]);
    register_setting('consultation_settings_group', 'consultation_free_description', [
        'default' => '내 상태 확인, 수강료, 커리큘럼, 등록 절차 등 빠른 안내',
        'sanitize_callback' => 'sanitize_textarea_field',
    ]);
    register_setting('consultation_settings_group', 'consultation_paid_label', [
        'default' => '[유료] 심층 보컬 진단 & 솔루션',
        'sanitize_callback' => 'sanitize_text_field',
    ]);
    register_setting('consultation_settings_group', 'consultation_paid_description', [
        'default' => '내 발성의 문제점을 심도있게 진단, 맞춤 솔루션 제공 / 진단지 및 연습파일&녹음파일 등 제공',
        'sanitize_callback' => 'sanitize_textarea_field',
    ]);
    register_setting('consultation_settings_group', 'consultation_footnote', [
        'default' => '* 심층 진단&솔루션 비용은 정규과정 당일 등록 시 전액 할인됩니다.',
        'sanitize_callback' => 'sanitize_text_field',
    ]);
});

function render_consultation_settings_page() {
    $visibility = get_option('consultation_visibility', 'both');
    $free_label = get_option('consultation_free_label', '[무료] 일반 상담');
    $free_desc = get_option('consultation_free_description', '내 상태 확인, 수강료, 커리큘럼, 등록 절차 등 빠른 안내');
    $paid_label = get_option('consultation_paid_label', '[유료] 심층 보컬 진단 & 솔루션');
    $paid_desc = get_option('consultation_paid_description', '내 발성의 문제점을 심도있게 진단, 맞춤 솔루션 제공 / 진단지 및 연습파일&녹음파일 등 제공');
    $footnote = get_option('consultation_footnote', '* 심층 진단&솔루션 비용은 정규과정 당일 등록 시 전액 할인됩니다.');
    ?>
    <div class="wrap">
        <h1>상담 유형 설정</h1>
        <p class="description">프론트엔드 상담 폼에 노출되는 상담 유형을 설정합니다. 저장 후 약 1분 내에 사이트에 반영됩니다.</p>
        <form method="post" action="options.php">
            <?php settings_fields('consultation_settings_group'); ?>

            <table class="form-table">
                <!-- 노출 설정 -->
                <tr>
                    <th scope="row">노출 설정</th>
                    <td>
                        <fieldset>
                            <label><input type="radio" name="consultation_visibility" value="both" <?php checked($visibility, 'both'); ?>> 무료 + 유료 둘 다</label><br>
                            <label><input type="radio" name="consultation_visibility" value="free_only" <?php checked($visibility, 'free_only'); ?>> 무료만</label><br>
                            <label><input type="radio" name="consultation_visibility" value="paid_only" <?php checked($visibility, 'paid_only'); ?>> 유료만</label>
                        </fieldset>
                    </td>
                </tr>

                <!-- 구분선 -->
                <tr><td colspan="2"><hr></td></tr>

                <!-- 무료 상담 -->
                <tr>
                    <th scope="row" colspan="2"><h2 style="margin:0">무료 상담</h2></th>
                </tr>
                <tr>
                    <th scope="row"><label for="consultation_free_label">버튼 라벨</label></th>
                    <td><input type="text" id="consultation_free_label" name="consultation_free_label" value="<?php echo esc_attr($free_label); ?>" class="regular-text"></td>
                </tr>
                <tr>
                    <th scope="row"><label for="consultation_free_description">설명</label></th>
                    <td><textarea id="consultation_free_description" name="consultation_free_description" rows="3" class="large-text"><?php echo esc_textarea($free_desc); ?></textarea></td>
                </tr>

                <!-- 구분선 -->
                <tr><td colspan="2"><hr></td></tr>

                <!-- 유료 상담 -->
                <tr>
                    <th scope="row" colspan="2"><h2 style="margin:0">유료 상담</h2></th>
                </tr>
                <tr>
                    <th scope="row"><label for="consultation_paid_label">버튼 라벨</label></th>
                    <td><input type="text" id="consultation_paid_label" name="consultation_paid_label" value="<?php echo esc_attr($paid_label); ?>" class="regular-text"></td>
                </tr>
                <tr>
                    <th scope="row"><label for="consultation_paid_description">설명</label></th>
                    <td><textarea id="consultation_paid_description" name="consultation_paid_description" rows="3" class="large-text"><?php echo esc_textarea($paid_desc); ?></textarea></td>
                </tr>

                <!-- 구분선 -->
                <tr><td colspan="2"><hr></td></tr>

                <!-- 하단 안내문구 -->
                <tr>
                    <th scope="row"><label for="consultation_footnote">하단 안내문구</label></th>
                    <td>
                        <input type="text" id="consultation_footnote" name="consultation_footnote" value="<?php echo esc_attr($footnote); ?>" class="large-text">
                        <p class="description">비워두면 안내문구가 표시되지 않습니다.</p>
                    </td>
                </tr>
            </table>

            <?php submit_button('설정 저장'); ?>
        </form>
    </div>
    <?php
}

// ── 2. WPGraphQL 필드 등록 ──

add_action('graphql_register_types', function () {
    register_graphql_object_type('ConsultationSettings', [
        'description' => '상담 유형 설정',
        'fields' => [
            'visibility' => ['type' => 'String', 'description' => '노출 설정 (free_only, paid_only, both)'],
            'freeLabel' => ['type' => 'String', 'description' => '무료 상담 라벨'],
            'freeDescription' => ['type' => 'String', 'description' => '무료 상담 설명'],
            'paidLabel' => ['type' => 'String', 'description' => '유료 상담 라벨'],
            'paidDescription' => ['type' => 'String', 'description' => '유료 상담 설명'],
            'footnote' => ['type' => 'String', 'description' => '하단 안내문구'],
        ],
    ]);

    register_graphql_field('RootQuery', 'consultationSettings', [
        'type' => 'ConsultationSettings',
        'description' => '상담 유형 설정 조회',
        'resolve' => function () {
            return [
                'visibility' => get_option('consultation_visibility', 'both'),
                'freeLabel' => get_option('consultation_free_label', '[무료] 일반 상담'),
                'freeDescription' => get_option('consultation_free_description', '내 상태 확인, 수강료, 커리큘럼, 등록 절차 등 빠른 안내'),
                'paidLabel' => get_option('consultation_paid_label', '[유료] 심층 보컬 진단 & 솔루션'),
                'paidDescription' => get_option('consultation_paid_description', '내 발성의 문제점을 심도있게 진단, 맞춤 솔루션 제공 / 진단지 및 연습파일&녹음파일 등 제공'),
                'footnote' => get_option('consultation_footnote', '* 심층 진단&솔루션 비용은 정규과정 당일 등록 시 전액 할인됩니다.'),
            ];
        },
    ]);
});
