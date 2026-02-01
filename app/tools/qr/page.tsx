import React, { Suspense } from "react";
import QrHub from "./_components/QrHub";
import { KinlyShell, KinlyHeading } from "../../../components";

export const metadata = {
  title: "Kinly QR Generator Hub",
  robots: {
    index: false,
    follow: false,
  },
};

export default function QrPage() {
  return (
    <KinlyShell>
        <KinlyHeading level={1}>QR Generator Hub</KinlyHeading>
        <Suspense fallback={<div>Loading Interface...</div>}>
          <QrHub />
        </Suspense>
    </KinlyShell>
  );
}
