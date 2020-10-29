default: run

run:
	@deno fmt
	@deno run src/main.ts ${arg}

.PHONY: default run
