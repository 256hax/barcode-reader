// Ref: https://github.com/Huskydog9988/Salve/blob/main/src/join/scannerTypes.d.ts
// Ref: https://github.com/utamori/quagga2-react-ts-vite-example/blob/main/src/components/Result.tsx
import { QuaggaJSResultObject_CodeResult } from "@ericblade/quagga2";
import { MutableRefObject } from "react";

export type onDetectedType = (
  code: QuaggaJSResultObject_CodeResult["code"]
) => void;
  
export type onScannerReady = () => void;

export interface DefaultConstraints {
  width: number;
  height: number;
}

export interface DefaultLocatorSettings {
  patchSize: "small" | "medium" | "large";
  halfSample: boolean;
}

export interface ScannerProps {
  onDetected: onDetectedType;
  scannerRef: MutableRefObject<any>;
  onScannerReady?: any;
  cameraId?: string;
  facingMode?: string;
  constraints?: DefaultConstraints;
  locator?: DefaultLocatorSettings;
  numOfWorkers?: number;
  decoders?: string[];
  locate?: boolean;
}

export interface ResultProps {
  result: {
      codeResult: {
        code: any;
        format: any;
    };
  }
}