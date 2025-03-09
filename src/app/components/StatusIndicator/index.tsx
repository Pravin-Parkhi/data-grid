'use client';

import { FileStatus } from "@/app/models/file";

interface StatusIndicatorProps {
  status: FileStatus;
}

/**
 * StatusIndicator Component
 * 
 * This component renders a status indicator for a file based on its status.
 * If the status is 'available', it shows a dot indicator along with the status text.
 * Otherwise, it just shows the status text.
 * 
 * Props:
 * - status: The status of the file, which is of type FileStatus.
 * 
 * @param {StatusIndicatorProps} props - The props for the StatusIndicator component.
 * @returns {JSX.Element} The rendered StatusIndicator component.
 */
export function StatusIndicator({ status }: StatusIndicatorProps) {
  /**
   * Renders the status indicator.
   * If the status is 'available', it shows a dot indicator along with the status text.
   * Otherwise, it just shows the status text.
   * 
   * @returns {JSX.Element} The rendered status indicator.
   */
  if (status !== 'available') return <span>{status}</span>;

  return (
    <div className="status-indicator">
      <div className="status-dot" />
      <span>{status}</span>
    </div>
  );
}