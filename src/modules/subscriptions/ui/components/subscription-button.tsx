import { cn } from "@/lib/utils";
import { Button, } from "@/components/ui/button";

interface SubscriptionButtonProps {
    onClick: any
    disabled: boolean
    isSubscribed: boolean;
    classname?: string;
    size?: any;
}

export const SubscriptionButton = ({
    onClick,
    disabled,
    isSubscribed,
    classname,
    size,
}: SubscriptionButtonProps) => {
    return (
        <Button
            size={size}
            variant={isSubscribed ? "secondary" : "default"}
            className={cn("rounded-full", classname)}
            onClick={onClick}
            disabled={disabled}
        >
            {isSubscribed ? "Unsubscribe" : "Subscribe"}
        </Button>
    )
}