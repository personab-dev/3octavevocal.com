import {
    Menu,
    X,
    ChevronDown,
    ChevronRight,
    MapPin,
    Phone,
    Clock,
    Instagram,
    Youtube,
    Music,
    User,
    Check,
    Star,
    Calendar,
    ArrowRight,
} from "lucide-react";

export const Icons = {
    Menu,
    X,
    ChevronDown,
    ChevronRight,
    MapPin,
    Phone,
    Clock,
    Instagram,
    Youtube,
    Music,
    User,
    Check,
    Star,
    Calendar,
    ArrowRight,
    // Custom 3B Logo / Symbol can be added here as SVG components
    Logo: ({ className }: { className?: string }) => (
        <div className={`relative h-10 w-auto ${className}`}>
            {/* Placeholder for Logo - In real implementation, use Next/Image or SVG */}
            <span className="font-display text-2xl font-bold tracking-tighter">
                3 OCTAVE <span className="text-accent">MASTER</span>
            </span>
        </div>
    ),
};
