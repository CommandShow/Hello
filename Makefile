default: run

run:
	@deno fmt
	@deno run src/hello.ts ${arg}

.PHONY: default run
