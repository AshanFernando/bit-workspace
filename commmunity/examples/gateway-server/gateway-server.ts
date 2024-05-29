import { ApplicationInstance } from '@teambit/application';
import { DeployOptions } from '@bitdev/symphony.backends.backend-server';

export interface GatewayServer {
  /**
   * name of the context.
   */
  name?: string;

  /**
   * runs the gateway.
   */
  run: (context: GatewayContext) => Promise<ApplicationInstance>;

  /**
   * deploy options.
   */
  deployOptions?: DeployOptions;
}

export type GatewayContext = {
  /**
   * port
   */
  port?: number;

  /**
   * services for run.
   */
  services: ApplicationInstance[];

  /**
   * cors configuration.
   */
  cors?: CorsOptions;
};

export type CorsOptions = {
  /**
   * list of domains to allow.
   */
  domains?: string[];

  /**
   * configure the credentials.
   */
  credentials?: boolean;
};
