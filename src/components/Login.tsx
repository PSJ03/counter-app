"use client";

import { client } from "@/app/client";
import { ConnectButton, useActiveAccount } from "thirdweb/react";
import React from "react";
import Counter from "@/components/Counter";

export default function Login() {
  const account = useActiveAccount();

  return (
    <div className="text-center">
      {account ? (
        <div>
          <ConnectButton client={client} />
          <Counter />
        </div>
      ) : (
        <ConnectButton client={client} />
      )}
    </div>
  );
}
