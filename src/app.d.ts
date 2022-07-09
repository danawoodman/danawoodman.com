/// <reference types="@sveltejs/kit" />
declare namespace App {
	interface Locals {}
	interface Platform {
		env: {
			COUNTER: DurableObjectNamespace;
		};
		context: {
			waitUntil(promise: Promise<any>): void;
		};
		caches: CacheStorage & { default: Cache };
	}
	interface Session {}
	interface Stuff {}
}

interface Post {
	title: string;
	description?: string;
	draft?: boolean;
	image?: string;
	slug?: string;
	published?: string;
	tags?: string[];
	categories?: string[];
}
