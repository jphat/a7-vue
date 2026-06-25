/**
 * Global test setup — loaded before tests via bunfig.toml preload
 * @see https://bun.com/docs/test/configuration#preload-scripts
 */
// @ts-expect-error
import { afterAll, beforeAll } from "bun:test";

beforeAll(() => {
	// Set up global test environment, e.g. initialize databases, mock APIs, etc.
});

afterAll(() => {
	// Clean up
});
