/**
 * portfinder.js typescript definitions.
 *
 * (C) 2011, Charlie Robbins
 */

declare type PortfinderHandler = (err: Error, port: number) => void;

declare interface PortFinderOptions{
  /**
   * Host to find available port on.
   */
  host: string;
  /**
   * Minimum port (takes precedence over `basePort`).
   */
  port: number;
}

/**
 * The lowest port to begin any port search from.
 */
export declare let basePort: number;

/**
 * Responds with a unbound port on the current machine.
 */
export declare function getPort(options: PortFinderOptions, callback: PortfinderHandler): void;
export declare function getPort(callback: PortfinderHandler): void;
