"use client";

import { ErrorState } from "@/components/error-state";

const ErrorPage = () => {
  return (
    <ErrorState
      title="Error Loading Agents"
      description="something went wrong"
    />
  );
};

export default ErrorPage;
