"use client";

import { CopilotKit } from "@copilotkit/react-core";
import Main from "./Main";
import {
  ModelSelectorProvider,
  useModelSelectorContext,
} from "@/lib/model-selector-provider";
import { ModelSelector } from "@/components/ModelSelector";

export default function ModelSelectorWrapper() {
  return (
    <ModelSelectorProvider>
      <Home />
      <ModelSelector />
    </ModelSelectorProvider>
  );
}

function Home() {
  const { agent, lgcDeploymentUrl } = useModelSelectorContext();

  const runtimeUrl = `/api/copilotkit?lgcDeploymentUrl=${lgcDeploymentUrl ?? ''}`

  return (
    <CopilotKit
      runtimeUrl={runtimeUrl}
      showDevConsole={false}
      agent={agent}
    >
      <Main />
    </CopilotKit>
  );
}
