import { ReactNode } from 'react';

// This layout will wrap all pages within the (admin) route group.
// We can add admin-specific navigation, headers, or authentication checks here later.

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  // Basic structure for now
  return (
    <div className="admin-container min-h-screen bg-muted/40 p-4 md:p-8">
      {/* We might add an admin-specific sidebar or header here */}
      <main>{children}</main>
    </div>
  );
}

