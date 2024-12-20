/**
* This file was @generated using pocketbase-typegen
*/

import type PocketBase from 'pocketbase'
import type { RecordService } from 'pocketbase'

export enum Collections {
	Articles = "articles",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export enum ArticlesCategoryOptions {
	"tous" = "tous",
	"développement" = "développement",
	"communication" = "communication",
	"design" = "design",
}
export type ArticlesRecord = {
	URL?: string
	category?: ArticlesCategoryOptions
	content2?: HTMLString
	content3?: HTMLString
	content4?: HTMLString
	content5?: HTMLString
	content6?: HTMLString
	content?: HTMLString
	image2?: string
	image3?: string
	image4?: string
	image5?: string
	image6?: string
	image?: string
	note?: string
	title?: string
	titre2?: string
	titre3?: string
	titre4?: string
	titre5?: string
	titre6?: string
}

export type UsersRecord = {
	avatar?: string
	name?: string
}

// Response types include system fields and match responses from the PocketBase API
export type ArticlesResponse<Texpand = unknown> = Required<ArticlesRecord> & BaseSystemFields<Texpand>
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> & AuthSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	articles: ArticlesRecord
	users: UsersRecord
}

export type CollectionResponses = {
	articles: ArticlesResponse
	users: UsersResponse
}

// Type for usage with type asserted PocketBase instance
// https://github.com/pocketbase/js-sdk#specify-typescript-definitions

export type TypedPocketBase = PocketBase & {
	collection(idOrName: 'articles'): RecordService<ArticlesResponse>
	collection(idOrName: 'users'): RecordService<UsersResponse>
}
