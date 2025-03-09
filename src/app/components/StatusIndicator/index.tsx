'use client';

import { FileStatus } from "@/app/models/file";

interface StatusIndicatorProps {
  status: FileStatus;
}

export function StatusIndicator({ status }: StatusIndicatorProps) {
  if (status !== 'available') return <span>{status}</span>;

  return (
    <div className="status-indicator">
      <div className="status-dot" />
      <span>{status}</span>
    </div>
  );
}