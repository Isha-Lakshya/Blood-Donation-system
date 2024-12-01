import React from "react";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface NotificationProps {
  title: string;
  description: string;
  actionText?: string;
  onActionClick?: () => void;
}

const NotificationCard: React.FC<NotificationProps> = ({ title, description, actionText, onActionClick }) => {
  return (
    <Card className="w-full max-w-sm border shadow-md hover:shadow-lg transition-all">

      <CardHeader>
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
        <CardDescription className="text-gray-600">{description}</CardDescription>
      </CardHeader>
      
      {actionText && (
        <CardFooter className="flex justify-end ">
          <Button className="bg-primary text-background"variant="outline" size="sm" onClick={onActionClick}>
            {actionText}
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default NotificationCard;
