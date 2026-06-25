import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
	testDir: "./src/tests",
	fullyParallel: true,
	forbidOnly: !!process.env.CI,
	retries: process.env.CI ? 2 : 0,
	use: {
		baseURL: "http://localhost:4321",
		trace: "on-first-retry",
	},
	webServer: {
		command: "bun run dev",
		url: "http://localhost:4321",
		reuseExistingServer: !process.env.CI,
		timeout: 120_000,
	},
	projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
});
