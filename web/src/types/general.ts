import { Ref } from 'vue';

export type MaybeRef<T> = T | Ref<T>;

export type TaskItem = {
	name: string,
	description: string,
	completed: boolean,
}