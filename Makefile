default: start

start:
	@deno fmt
	@deno task start ${arg}

.PHONY: default start
