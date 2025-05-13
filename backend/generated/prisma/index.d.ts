
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Monitor
 * 
 */
export type Monitor = $Result.DefaultSelection<Prisma.$MonitorPayload>
/**
 * Model CheckResult
 * 
 */
export type CheckResult = $Result.DefaultSelection<Prisma.$CheckResultPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>
/**
 * Model NotificationSent
 * 
 */
export type NotificationSent = $Result.DefaultSelection<Prisma.$NotificationSentPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const MonitorType: {
  HTTP: 'HTTP',
  SSL: 'SSL',
  DOMAIN: 'DOMAIN',
  HEARTBEAT: 'HEARTBEAT',
  TCP: 'TCP',
  ICMP: 'ICMP',
  KEYWORD: 'KEYWORD'
};

export type MonitorType = (typeof MonitorType)[keyof typeof MonitorType]


export const NotificationType: {
  EMAIL: 'EMAIL',
  SMS: 'SMS',
  SLACK: 'SLACK',
  WEBHOOK: 'WEBHOOK'
};

export type NotificationType = (typeof NotificationType)[keyof typeof NotificationType]

}

export type MonitorType = $Enums.MonitorType

export const MonitorType: typeof $Enums.MonitorType

export type NotificationType = $Enums.NotificationType

export const NotificationType: typeof $Enums.NotificationType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.monitor`: Exposes CRUD operations for the **Monitor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Monitors
    * const monitors = await prisma.monitor.findMany()
    * ```
    */
  get monitor(): Prisma.MonitorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.checkResult`: Exposes CRUD operations for the **CheckResult** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CheckResults
    * const checkResults = await prisma.checkResult.findMany()
    * ```
    */
  get checkResult(): Prisma.CheckResultDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notificationSent`: Exposes CRUD operations for the **NotificationSent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NotificationSents
    * const notificationSents = await prisma.notificationSent.findMany()
    * ```
    */
  get notificationSent(): Prisma.NotificationSentDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Monitor: 'Monitor',
    CheckResult: 'CheckResult',
    Notification: 'Notification',
    NotificationSent: 'NotificationSent'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "monitor" | "checkResult" | "notification" | "notificationSent"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Monitor: {
        payload: Prisma.$MonitorPayload<ExtArgs>
        fields: Prisma.MonitorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MonitorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonitorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MonitorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonitorPayload>
          }
          findFirst: {
            args: Prisma.MonitorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonitorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MonitorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonitorPayload>
          }
          findMany: {
            args: Prisma.MonitorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonitorPayload>[]
          }
          create: {
            args: Prisma.MonitorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonitorPayload>
          }
          createMany: {
            args: Prisma.MonitorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MonitorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonitorPayload>[]
          }
          delete: {
            args: Prisma.MonitorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonitorPayload>
          }
          update: {
            args: Prisma.MonitorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonitorPayload>
          }
          deleteMany: {
            args: Prisma.MonitorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MonitorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MonitorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonitorPayload>[]
          }
          upsert: {
            args: Prisma.MonitorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonitorPayload>
          }
          aggregate: {
            args: Prisma.MonitorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMonitor>
          }
          groupBy: {
            args: Prisma.MonitorGroupByArgs<ExtArgs>
            result: $Utils.Optional<MonitorGroupByOutputType>[]
          }
          count: {
            args: Prisma.MonitorCountArgs<ExtArgs>
            result: $Utils.Optional<MonitorCountAggregateOutputType> | number
          }
        }
      }
      CheckResult: {
        payload: Prisma.$CheckResultPayload<ExtArgs>
        fields: Prisma.CheckResultFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CheckResultFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckResultPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CheckResultFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckResultPayload>
          }
          findFirst: {
            args: Prisma.CheckResultFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckResultPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CheckResultFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckResultPayload>
          }
          findMany: {
            args: Prisma.CheckResultFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckResultPayload>[]
          }
          create: {
            args: Prisma.CheckResultCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckResultPayload>
          }
          createMany: {
            args: Prisma.CheckResultCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CheckResultCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckResultPayload>[]
          }
          delete: {
            args: Prisma.CheckResultDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckResultPayload>
          }
          update: {
            args: Prisma.CheckResultUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckResultPayload>
          }
          deleteMany: {
            args: Prisma.CheckResultDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CheckResultUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CheckResultUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckResultPayload>[]
          }
          upsert: {
            args: Prisma.CheckResultUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckResultPayload>
          }
          aggregate: {
            args: Prisma.CheckResultAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCheckResult>
          }
          groupBy: {
            args: Prisma.CheckResultGroupByArgs<ExtArgs>
            result: $Utils.Optional<CheckResultGroupByOutputType>[]
          }
          count: {
            args: Prisma.CheckResultCountArgs<ExtArgs>
            result: $Utils.Optional<CheckResultCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
      NotificationSent: {
        payload: Prisma.$NotificationSentPayload<ExtArgs>
        fields: Prisma.NotificationSentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationSentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationSentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationSentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationSentPayload>
          }
          findFirst: {
            args: Prisma.NotificationSentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationSentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationSentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationSentPayload>
          }
          findMany: {
            args: Prisma.NotificationSentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationSentPayload>[]
          }
          create: {
            args: Prisma.NotificationSentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationSentPayload>
          }
          createMany: {
            args: Prisma.NotificationSentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationSentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationSentPayload>[]
          }
          delete: {
            args: Prisma.NotificationSentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationSentPayload>
          }
          update: {
            args: Prisma.NotificationSentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationSentPayload>
          }
          deleteMany: {
            args: Prisma.NotificationSentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationSentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationSentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationSentPayload>[]
          }
          upsert: {
            args: Prisma.NotificationSentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationSentPayload>
          }
          aggregate: {
            args: Prisma.NotificationSentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotificationSent>
          }
          groupBy: {
            args: Prisma.NotificationSentGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationSentGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationSentCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationSentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    monitor?: MonitorOmit
    checkResult?: CheckResultOmit
    notification?: NotificationOmit
    notificationSent?: NotificationSentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    monitors: number
    notifications: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    monitors?: boolean | UserCountOutputTypeCountMonitorsArgs
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMonitorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MonitorWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }


  /**
   * Count Type MonitorCountOutputType
   */

  export type MonitorCountOutputType = {
    checkResults: number
    notificationSents: number
  }

  export type MonitorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    checkResults?: boolean | MonitorCountOutputTypeCountCheckResultsArgs
    notificationSents?: boolean | MonitorCountOutputTypeCountNotificationSentsArgs
  }

  // Custom InputTypes
  /**
   * MonitorCountOutputType without action
   */
  export type MonitorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonitorCountOutputType
     */
    select?: MonitorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MonitorCountOutputType without action
   */
  export type MonitorCountOutputTypeCountCheckResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CheckResultWhereInput
  }

  /**
   * MonitorCountOutputType without action
   */
  export type MonitorCountOutputTypeCountNotificationSentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationSentWhereInput
  }


  /**
   * Count Type NotificationCountOutputType
   */

  export type NotificationCountOutputType = {
    sent: number
  }

  export type NotificationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sent?: boolean | NotificationCountOutputTypeCountSentArgs
  }

  // Custom InputTypes
  /**
   * NotificationCountOutputType without action
   */
  export type NotificationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationCountOutputType
     */
    select?: NotificationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NotificationCountOutputType without action
   */
  export type NotificationCountOutputTypeCountSentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationSentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    name: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    monitors?: boolean | User$monitorsArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    monitors?: boolean | User$monitorsArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      monitors: Prisma.$MonitorPayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      name: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    monitors<T extends User$monitorsArgs<ExtArgs> = {}>(args?: Subset<T, User$monitorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonitorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends User$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.monitors
   */
  export type User$monitorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monitor
     */
    select?: MonitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Monitor
     */
    omit?: MonitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonitorInclude<ExtArgs> | null
    where?: MonitorWhereInput
    orderBy?: MonitorOrderByWithRelationInput | MonitorOrderByWithRelationInput[]
    cursor?: MonitorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MonitorScalarFieldEnum | MonitorScalarFieldEnum[]
  }

  /**
   * User.notifications
   */
  export type User$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Monitor
   */

  export type AggregateMonitor = {
    _count: MonitorCountAggregateOutputType | null
    _avg: MonitorAvgAggregateOutputType | null
    _sum: MonitorSumAggregateOutputType | null
    _min: MonitorMinAggregateOutputType | null
    _max: MonitorMaxAggregateOutputType | null
  }

  export type MonitorAvgAggregateOutputType = {
    checkInterval: number | null
  }

  export type MonitorSumAggregateOutputType = {
    checkInterval: number | null
  }

  export type MonitorMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    type: $Enums.MonitorType | null
    isActive: boolean | null
    checkInterval: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MonitorMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    type: $Enums.MonitorType | null
    isActive: boolean | null
    checkInterval: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MonitorCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    type: number
    config: number
    isActive: number
    checkInterval: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MonitorAvgAggregateInputType = {
    checkInterval?: true
  }

  export type MonitorSumAggregateInputType = {
    checkInterval?: true
  }

  export type MonitorMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    type?: true
    isActive?: true
    checkInterval?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MonitorMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    type?: true
    isActive?: true
    checkInterval?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MonitorCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    type?: true
    config?: true
    isActive?: true
    checkInterval?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MonitorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Monitor to aggregate.
     */
    where?: MonitorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Monitors to fetch.
     */
    orderBy?: MonitorOrderByWithRelationInput | MonitorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MonitorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Monitors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Monitors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Monitors
    **/
    _count?: true | MonitorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MonitorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MonitorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MonitorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MonitorMaxAggregateInputType
  }

  export type GetMonitorAggregateType<T extends MonitorAggregateArgs> = {
        [P in keyof T & keyof AggregateMonitor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMonitor[P]>
      : GetScalarType<T[P], AggregateMonitor[P]>
  }




  export type MonitorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MonitorWhereInput
    orderBy?: MonitorOrderByWithAggregationInput | MonitorOrderByWithAggregationInput[]
    by: MonitorScalarFieldEnum[] | MonitorScalarFieldEnum
    having?: MonitorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MonitorCountAggregateInputType | true
    _avg?: MonitorAvgAggregateInputType
    _sum?: MonitorSumAggregateInputType
    _min?: MonitorMinAggregateInputType
    _max?: MonitorMaxAggregateInputType
  }

  export type MonitorGroupByOutputType = {
    id: string
    userId: string
    name: string
    type: $Enums.MonitorType
    config: JsonValue
    isActive: boolean
    checkInterval: number
    createdAt: Date
    updatedAt: Date
    _count: MonitorCountAggregateOutputType | null
    _avg: MonitorAvgAggregateOutputType | null
    _sum: MonitorSumAggregateOutputType | null
    _min: MonitorMinAggregateOutputType | null
    _max: MonitorMaxAggregateOutputType | null
  }

  type GetMonitorGroupByPayload<T extends MonitorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MonitorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MonitorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MonitorGroupByOutputType[P]>
            : GetScalarType<T[P], MonitorGroupByOutputType[P]>
        }
      >
    >


  export type MonitorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    type?: boolean
    config?: boolean
    isActive?: boolean
    checkInterval?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    checkResults?: boolean | Monitor$checkResultsArgs<ExtArgs>
    notificationSents?: boolean | Monitor$notificationSentsArgs<ExtArgs>
    _count?: boolean | MonitorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["monitor"]>

  export type MonitorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    type?: boolean
    config?: boolean
    isActive?: boolean
    checkInterval?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["monitor"]>

  export type MonitorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    type?: boolean
    config?: boolean
    isActive?: boolean
    checkInterval?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["monitor"]>

  export type MonitorSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    type?: boolean
    config?: boolean
    isActive?: boolean
    checkInterval?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MonitorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "type" | "config" | "isActive" | "checkInterval" | "createdAt" | "updatedAt", ExtArgs["result"]["monitor"]>
  export type MonitorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    checkResults?: boolean | Monitor$checkResultsArgs<ExtArgs>
    notificationSents?: boolean | Monitor$notificationSentsArgs<ExtArgs>
    _count?: boolean | MonitorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MonitorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MonitorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MonitorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Monitor"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      checkResults: Prisma.$CheckResultPayload<ExtArgs>[]
      notificationSents: Prisma.$NotificationSentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string
      type: $Enums.MonitorType
      config: Prisma.JsonValue
      isActive: boolean
      checkInterval: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["monitor"]>
    composites: {}
  }

  type MonitorGetPayload<S extends boolean | null | undefined | MonitorDefaultArgs> = $Result.GetResult<Prisma.$MonitorPayload, S>

  type MonitorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MonitorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MonitorCountAggregateInputType | true
    }

  export interface MonitorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Monitor'], meta: { name: 'Monitor' } }
    /**
     * Find zero or one Monitor that matches the filter.
     * @param {MonitorFindUniqueArgs} args - Arguments to find a Monitor
     * @example
     * // Get one Monitor
     * const monitor = await prisma.monitor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MonitorFindUniqueArgs>(args: SelectSubset<T, MonitorFindUniqueArgs<ExtArgs>>): Prisma__MonitorClient<$Result.GetResult<Prisma.$MonitorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Monitor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MonitorFindUniqueOrThrowArgs} args - Arguments to find a Monitor
     * @example
     * // Get one Monitor
     * const monitor = await prisma.monitor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MonitorFindUniqueOrThrowArgs>(args: SelectSubset<T, MonitorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MonitorClient<$Result.GetResult<Prisma.$MonitorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Monitor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonitorFindFirstArgs} args - Arguments to find a Monitor
     * @example
     * // Get one Monitor
     * const monitor = await prisma.monitor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MonitorFindFirstArgs>(args?: SelectSubset<T, MonitorFindFirstArgs<ExtArgs>>): Prisma__MonitorClient<$Result.GetResult<Prisma.$MonitorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Monitor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonitorFindFirstOrThrowArgs} args - Arguments to find a Monitor
     * @example
     * // Get one Monitor
     * const monitor = await prisma.monitor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MonitorFindFirstOrThrowArgs>(args?: SelectSubset<T, MonitorFindFirstOrThrowArgs<ExtArgs>>): Prisma__MonitorClient<$Result.GetResult<Prisma.$MonitorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Monitors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonitorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Monitors
     * const monitors = await prisma.monitor.findMany()
     * 
     * // Get first 10 Monitors
     * const monitors = await prisma.monitor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const monitorWithIdOnly = await prisma.monitor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MonitorFindManyArgs>(args?: SelectSubset<T, MonitorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonitorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Monitor.
     * @param {MonitorCreateArgs} args - Arguments to create a Monitor.
     * @example
     * // Create one Monitor
     * const Monitor = await prisma.monitor.create({
     *   data: {
     *     // ... data to create a Monitor
     *   }
     * })
     * 
     */
    create<T extends MonitorCreateArgs>(args: SelectSubset<T, MonitorCreateArgs<ExtArgs>>): Prisma__MonitorClient<$Result.GetResult<Prisma.$MonitorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Monitors.
     * @param {MonitorCreateManyArgs} args - Arguments to create many Monitors.
     * @example
     * // Create many Monitors
     * const monitor = await prisma.monitor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MonitorCreateManyArgs>(args?: SelectSubset<T, MonitorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Monitors and returns the data saved in the database.
     * @param {MonitorCreateManyAndReturnArgs} args - Arguments to create many Monitors.
     * @example
     * // Create many Monitors
     * const monitor = await prisma.monitor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Monitors and only return the `id`
     * const monitorWithIdOnly = await prisma.monitor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MonitorCreateManyAndReturnArgs>(args?: SelectSubset<T, MonitorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonitorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Monitor.
     * @param {MonitorDeleteArgs} args - Arguments to delete one Monitor.
     * @example
     * // Delete one Monitor
     * const Monitor = await prisma.monitor.delete({
     *   where: {
     *     // ... filter to delete one Monitor
     *   }
     * })
     * 
     */
    delete<T extends MonitorDeleteArgs>(args: SelectSubset<T, MonitorDeleteArgs<ExtArgs>>): Prisma__MonitorClient<$Result.GetResult<Prisma.$MonitorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Monitor.
     * @param {MonitorUpdateArgs} args - Arguments to update one Monitor.
     * @example
     * // Update one Monitor
     * const monitor = await prisma.monitor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MonitorUpdateArgs>(args: SelectSubset<T, MonitorUpdateArgs<ExtArgs>>): Prisma__MonitorClient<$Result.GetResult<Prisma.$MonitorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Monitors.
     * @param {MonitorDeleteManyArgs} args - Arguments to filter Monitors to delete.
     * @example
     * // Delete a few Monitors
     * const { count } = await prisma.monitor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MonitorDeleteManyArgs>(args?: SelectSubset<T, MonitorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Monitors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonitorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Monitors
     * const monitor = await prisma.monitor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MonitorUpdateManyArgs>(args: SelectSubset<T, MonitorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Monitors and returns the data updated in the database.
     * @param {MonitorUpdateManyAndReturnArgs} args - Arguments to update many Monitors.
     * @example
     * // Update many Monitors
     * const monitor = await prisma.monitor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Monitors and only return the `id`
     * const monitorWithIdOnly = await prisma.monitor.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MonitorUpdateManyAndReturnArgs>(args: SelectSubset<T, MonitorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonitorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Monitor.
     * @param {MonitorUpsertArgs} args - Arguments to update or create a Monitor.
     * @example
     * // Update or create a Monitor
     * const monitor = await prisma.monitor.upsert({
     *   create: {
     *     // ... data to create a Monitor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Monitor we want to update
     *   }
     * })
     */
    upsert<T extends MonitorUpsertArgs>(args: SelectSubset<T, MonitorUpsertArgs<ExtArgs>>): Prisma__MonitorClient<$Result.GetResult<Prisma.$MonitorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Monitors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonitorCountArgs} args - Arguments to filter Monitors to count.
     * @example
     * // Count the number of Monitors
     * const count = await prisma.monitor.count({
     *   where: {
     *     // ... the filter for the Monitors we want to count
     *   }
     * })
    **/
    count<T extends MonitorCountArgs>(
      args?: Subset<T, MonitorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MonitorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Monitor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonitorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MonitorAggregateArgs>(args: Subset<T, MonitorAggregateArgs>): Prisma.PrismaPromise<GetMonitorAggregateType<T>>

    /**
     * Group by Monitor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonitorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MonitorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MonitorGroupByArgs['orderBy'] }
        : { orderBy?: MonitorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MonitorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMonitorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Monitor model
   */
  readonly fields: MonitorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Monitor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MonitorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    checkResults<T extends Monitor$checkResultsArgs<ExtArgs> = {}>(args?: Subset<T, Monitor$checkResultsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notificationSents<T extends Monitor$notificationSentsArgs<ExtArgs> = {}>(args?: Subset<T, Monitor$notificationSentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationSentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Monitor model
   */
  interface MonitorFieldRefs {
    readonly id: FieldRef<"Monitor", 'String'>
    readonly userId: FieldRef<"Monitor", 'String'>
    readonly name: FieldRef<"Monitor", 'String'>
    readonly type: FieldRef<"Monitor", 'MonitorType'>
    readonly config: FieldRef<"Monitor", 'Json'>
    readonly isActive: FieldRef<"Monitor", 'Boolean'>
    readonly checkInterval: FieldRef<"Monitor", 'Int'>
    readonly createdAt: FieldRef<"Monitor", 'DateTime'>
    readonly updatedAt: FieldRef<"Monitor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Monitor findUnique
   */
  export type MonitorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monitor
     */
    select?: MonitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Monitor
     */
    omit?: MonitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonitorInclude<ExtArgs> | null
    /**
     * Filter, which Monitor to fetch.
     */
    where: MonitorWhereUniqueInput
  }

  /**
   * Monitor findUniqueOrThrow
   */
  export type MonitorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monitor
     */
    select?: MonitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Monitor
     */
    omit?: MonitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonitorInclude<ExtArgs> | null
    /**
     * Filter, which Monitor to fetch.
     */
    where: MonitorWhereUniqueInput
  }

  /**
   * Monitor findFirst
   */
  export type MonitorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monitor
     */
    select?: MonitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Monitor
     */
    omit?: MonitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonitorInclude<ExtArgs> | null
    /**
     * Filter, which Monitor to fetch.
     */
    where?: MonitorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Monitors to fetch.
     */
    orderBy?: MonitorOrderByWithRelationInput | MonitorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Monitors.
     */
    cursor?: MonitorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Monitors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Monitors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Monitors.
     */
    distinct?: MonitorScalarFieldEnum | MonitorScalarFieldEnum[]
  }

  /**
   * Monitor findFirstOrThrow
   */
  export type MonitorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monitor
     */
    select?: MonitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Monitor
     */
    omit?: MonitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonitorInclude<ExtArgs> | null
    /**
     * Filter, which Monitor to fetch.
     */
    where?: MonitorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Monitors to fetch.
     */
    orderBy?: MonitorOrderByWithRelationInput | MonitorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Monitors.
     */
    cursor?: MonitorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Monitors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Monitors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Monitors.
     */
    distinct?: MonitorScalarFieldEnum | MonitorScalarFieldEnum[]
  }

  /**
   * Monitor findMany
   */
  export type MonitorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monitor
     */
    select?: MonitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Monitor
     */
    omit?: MonitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonitorInclude<ExtArgs> | null
    /**
     * Filter, which Monitors to fetch.
     */
    where?: MonitorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Monitors to fetch.
     */
    orderBy?: MonitorOrderByWithRelationInput | MonitorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Monitors.
     */
    cursor?: MonitorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Monitors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Monitors.
     */
    skip?: number
    distinct?: MonitorScalarFieldEnum | MonitorScalarFieldEnum[]
  }

  /**
   * Monitor create
   */
  export type MonitorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monitor
     */
    select?: MonitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Monitor
     */
    omit?: MonitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonitorInclude<ExtArgs> | null
    /**
     * The data needed to create a Monitor.
     */
    data: XOR<MonitorCreateInput, MonitorUncheckedCreateInput>
  }

  /**
   * Monitor createMany
   */
  export type MonitorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Monitors.
     */
    data: MonitorCreateManyInput | MonitorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Monitor createManyAndReturn
   */
  export type MonitorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monitor
     */
    select?: MonitorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Monitor
     */
    omit?: MonitorOmit<ExtArgs> | null
    /**
     * The data used to create many Monitors.
     */
    data: MonitorCreateManyInput | MonitorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonitorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Monitor update
   */
  export type MonitorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monitor
     */
    select?: MonitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Monitor
     */
    omit?: MonitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonitorInclude<ExtArgs> | null
    /**
     * The data needed to update a Monitor.
     */
    data: XOR<MonitorUpdateInput, MonitorUncheckedUpdateInput>
    /**
     * Choose, which Monitor to update.
     */
    where: MonitorWhereUniqueInput
  }

  /**
   * Monitor updateMany
   */
  export type MonitorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Monitors.
     */
    data: XOR<MonitorUpdateManyMutationInput, MonitorUncheckedUpdateManyInput>
    /**
     * Filter which Monitors to update
     */
    where?: MonitorWhereInput
    /**
     * Limit how many Monitors to update.
     */
    limit?: number
  }

  /**
   * Monitor updateManyAndReturn
   */
  export type MonitorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monitor
     */
    select?: MonitorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Monitor
     */
    omit?: MonitorOmit<ExtArgs> | null
    /**
     * The data used to update Monitors.
     */
    data: XOR<MonitorUpdateManyMutationInput, MonitorUncheckedUpdateManyInput>
    /**
     * Filter which Monitors to update
     */
    where?: MonitorWhereInput
    /**
     * Limit how many Monitors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonitorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Monitor upsert
   */
  export type MonitorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monitor
     */
    select?: MonitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Monitor
     */
    omit?: MonitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonitorInclude<ExtArgs> | null
    /**
     * The filter to search for the Monitor to update in case it exists.
     */
    where: MonitorWhereUniqueInput
    /**
     * In case the Monitor found by the `where` argument doesn't exist, create a new Monitor with this data.
     */
    create: XOR<MonitorCreateInput, MonitorUncheckedCreateInput>
    /**
     * In case the Monitor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MonitorUpdateInput, MonitorUncheckedUpdateInput>
  }

  /**
   * Monitor delete
   */
  export type MonitorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monitor
     */
    select?: MonitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Monitor
     */
    omit?: MonitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonitorInclude<ExtArgs> | null
    /**
     * Filter which Monitor to delete.
     */
    where: MonitorWhereUniqueInput
  }

  /**
   * Monitor deleteMany
   */
  export type MonitorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Monitors to delete
     */
    where?: MonitorWhereInput
    /**
     * Limit how many Monitors to delete.
     */
    limit?: number
  }

  /**
   * Monitor.checkResults
   */
  export type Monitor$checkResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckResult
     */
    select?: CheckResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckResult
     */
    omit?: CheckResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckResultInclude<ExtArgs> | null
    where?: CheckResultWhereInput
    orderBy?: CheckResultOrderByWithRelationInput | CheckResultOrderByWithRelationInput[]
    cursor?: CheckResultWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CheckResultScalarFieldEnum | CheckResultScalarFieldEnum[]
  }

  /**
   * Monitor.notificationSents
   */
  export type Monitor$notificationSentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationSent
     */
    select?: NotificationSentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationSent
     */
    omit?: NotificationSentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationSentInclude<ExtArgs> | null
    where?: NotificationSentWhereInput
    orderBy?: NotificationSentOrderByWithRelationInput | NotificationSentOrderByWithRelationInput[]
    cursor?: NotificationSentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationSentScalarFieldEnum | NotificationSentScalarFieldEnum[]
  }

  /**
   * Monitor without action
   */
  export type MonitorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monitor
     */
    select?: MonitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Monitor
     */
    omit?: MonitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonitorInclude<ExtArgs> | null
  }


  /**
   * Model CheckResult
   */

  export type AggregateCheckResult = {
    _count: CheckResultCountAggregateOutputType | null
    _avg: CheckResultAvgAggregateOutputType | null
    _sum: CheckResultSumAggregateOutputType | null
    _min: CheckResultMinAggregateOutputType | null
    _max: CheckResultMaxAggregateOutputType | null
  }

  export type CheckResultAvgAggregateOutputType = {
    responseTime: number | null
  }

  export type CheckResultSumAggregateOutputType = {
    responseTime: number | null
  }

  export type CheckResultMinAggregateOutputType = {
    id: string | null
    monitorId: string | null
    status: string | null
    responseTime: number | null
    checkedAt: Date | null
  }

  export type CheckResultMaxAggregateOutputType = {
    id: string | null
    monitorId: string | null
    status: string | null
    responseTime: number | null
    checkedAt: Date | null
  }

  export type CheckResultCountAggregateOutputType = {
    id: number
    monitorId: number
    status: number
    responseTime: number
    details: number
    checkedAt: number
    _all: number
  }


  export type CheckResultAvgAggregateInputType = {
    responseTime?: true
  }

  export type CheckResultSumAggregateInputType = {
    responseTime?: true
  }

  export type CheckResultMinAggregateInputType = {
    id?: true
    monitorId?: true
    status?: true
    responseTime?: true
    checkedAt?: true
  }

  export type CheckResultMaxAggregateInputType = {
    id?: true
    monitorId?: true
    status?: true
    responseTime?: true
    checkedAt?: true
  }

  export type CheckResultCountAggregateInputType = {
    id?: true
    monitorId?: true
    status?: true
    responseTime?: true
    details?: true
    checkedAt?: true
    _all?: true
  }

  export type CheckResultAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CheckResult to aggregate.
     */
    where?: CheckResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CheckResults to fetch.
     */
    orderBy?: CheckResultOrderByWithRelationInput | CheckResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CheckResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CheckResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CheckResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CheckResults
    **/
    _count?: true | CheckResultCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CheckResultAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CheckResultSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CheckResultMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CheckResultMaxAggregateInputType
  }

  export type GetCheckResultAggregateType<T extends CheckResultAggregateArgs> = {
        [P in keyof T & keyof AggregateCheckResult]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCheckResult[P]>
      : GetScalarType<T[P], AggregateCheckResult[P]>
  }




  export type CheckResultGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CheckResultWhereInput
    orderBy?: CheckResultOrderByWithAggregationInput | CheckResultOrderByWithAggregationInput[]
    by: CheckResultScalarFieldEnum[] | CheckResultScalarFieldEnum
    having?: CheckResultScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CheckResultCountAggregateInputType | true
    _avg?: CheckResultAvgAggregateInputType
    _sum?: CheckResultSumAggregateInputType
    _min?: CheckResultMinAggregateInputType
    _max?: CheckResultMaxAggregateInputType
  }

  export type CheckResultGroupByOutputType = {
    id: string
    monitorId: string
    status: string
    responseTime: number | null
    details: JsonValue | null
    checkedAt: Date
    _count: CheckResultCountAggregateOutputType | null
    _avg: CheckResultAvgAggregateOutputType | null
    _sum: CheckResultSumAggregateOutputType | null
    _min: CheckResultMinAggregateOutputType | null
    _max: CheckResultMaxAggregateOutputType | null
  }

  type GetCheckResultGroupByPayload<T extends CheckResultGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CheckResultGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CheckResultGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CheckResultGroupByOutputType[P]>
            : GetScalarType<T[P], CheckResultGroupByOutputType[P]>
        }
      >
    >


  export type CheckResultSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    monitorId?: boolean
    status?: boolean
    responseTime?: boolean
    details?: boolean
    checkedAt?: boolean
    monitor?: boolean | MonitorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["checkResult"]>

  export type CheckResultSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    monitorId?: boolean
    status?: boolean
    responseTime?: boolean
    details?: boolean
    checkedAt?: boolean
    monitor?: boolean | MonitorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["checkResult"]>

  export type CheckResultSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    monitorId?: boolean
    status?: boolean
    responseTime?: boolean
    details?: boolean
    checkedAt?: boolean
    monitor?: boolean | MonitorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["checkResult"]>

  export type CheckResultSelectScalar = {
    id?: boolean
    monitorId?: boolean
    status?: boolean
    responseTime?: boolean
    details?: boolean
    checkedAt?: boolean
  }

  export type CheckResultOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "monitorId" | "status" | "responseTime" | "details" | "checkedAt", ExtArgs["result"]["checkResult"]>
  export type CheckResultInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    monitor?: boolean | MonitorDefaultArgs<ExtArgs>
  }
  export type CheckResultIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    monitor?: boolean | MonitorDefaultArgs<ExtArgs>
  }
  export type CheckResultIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    monitor?: boolean | MonitorDefaultArgs<ExtArgs>
  }

  export type $CheckResultPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CheckResult"
    objects: {
      monitor: Prisma.$MonitorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      monitorId: string
      status: string
      responseTime: number | null
      details: Prisma.JsonValue | null
      checkedAt: Date
    }, ExtArgs["result"]["checkResult"]>
    composites: {}
  }

  type CheckResultGetPayload<S extends boolean | null | undefined | CheckResultDefaultArgs> = $Result.GetResult<Prisma.$CheckResultPayload, S>

  type CheckResultCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CheckResultFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CheckResultCountAggregateInputType | true
    }

  export interface CheckResultDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CheckResult'], meta: { name: 'CheckResult' } }
    /**
     * Find zero or one CheckResult that matches the filter.
     * @param {CheckResultFindUniqueArgs} args - Arguments to find a CheckResult
     * @example
     * // Get one CheckResult
     * const checkResult = await prisma.checkResult.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CheckResultFindUniqueArgs>(args: SelectSubset<T, CheckResultFindUniqueArgs<ExtArgs>>): Prisma__CheckResultClient<$Result.GetResult<Prisma.$CheckResultPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CheckResult that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CheckResultFindUniqueOrThrowArgs} args - Arguments to find a CheckResult
     * @example
     * // Get one CheckResult
     * const checkResult = await prisma.checkResult.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CheckResultFindUniqueOrThrowArgs>(args: SelectSubset<T, CheckResultFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CheckResultClient<$Result.GetResult<Prisma.$CheckResultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CheckResult that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckResultFindFirstArgs} args - Arguments to find a CheckResult
     * @example
     * // Get one CheckResult
     * const checkResult = await prisma.checkResult.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CheckResultFindFirstArgs>(args?: SelectSubset<T, CheckResultFindFirstArgs<ExtArgs>>): Prisma__CheckResultClient<$Result.GetResult<Prisma.$CheckResultPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CheckResult that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckResultFindFirstOrThrowArgs} args - Arguments to find a CheckResult
     * @example
     * // Get one CheckResult
     * const checkResult = await prisma.checkResult.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CheckResultFindFirstOrThrowArgs>(args?: SelectSubset<T, CheckResultFindFirstOrThrowArgs<ExtArgs>>): Prisma__CheckResultClient<$Result.GetResult<Prisma.$CheckResultPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CheckResults that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckResultFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CheckResults
     * const checkResults = await prisma.checkResult.findMany()
     * 
     * // Get first 10 CheckResults
     * const checkResults = await prisma.checkResult.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const checkResultWithIdOnly = await prisma.checkResult.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CheckResultFindManyArgs>(args?: SelectSubset<T, CheckResultFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CheckResult.
     * @param {CheckResultCreateArgs} args - Arguments to create a CheckResult.
     * @example
     * // Create one CheckResult
     * const CheckResult = await prisma.checkResult.create({
     *   data: {
     *     // ... data to create a CheckResult
     *   }
     * })
     * 
     */
    create<T extends CheckResultCreateArgs>(args: SelectSubset<T, CheckResultCreateArgs<ExtArgs>>): Prisma__CheckResultClient<$Result.GetResult<Prisma.$CheckResultPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CheckResults.
     * @param {CheckResultCreateManyArgs} args - Arguments to create many CheckResults.
     * @example
     * // Create many CheckResults
     * const checkResult = await prisma.checkResult.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CheckResultCreateManyArgs>(args?: SelectSubset<T, CheckResultCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CheckResults and returns the data saved in the database.
     * @param {CheckResultCreateManyAndReturnArgs} args - Arguments to create many CheckResults.
     * @example
     * // Create many CheckResults
     * const checkResult = await prisma.checkResult.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CheckResults and only return the `id`
     * const checkResultWithIdOnly = await prisma.checkResult.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CheckResultCreateManyAndReturnArgs>(args?: SelectSubset<T, CheckResultCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckResultPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CheckResult.
     * @param {CheckResultDeleteArgs} args - Arguments to delete one CheckResult.
     * @example
     * // Delete one CheckResult
     * const CheckResult = await prisma.checkResult.delete({
     *   where: {
     *     // ... filter to delete one CheckResult
     *   }
     * })
     * 
     */
    delete<T extends CheckResultDeleteArgs>(args: SelectSubset<T, CheckResultDeleteArgs<ExtArgs>>): Prisma__CheckResultClient<$Result.GetResult<Prisma.$CheckResultPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CheckResult.
     * @param {CheckResultUpdateArgs} args - Arguments to update one CheckResult.
     * @example
     * // Update one CheckResult
     * const checkResult = await prisma.checkResult.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CheckResultUpdateArgs>(args: SelectSubset<T, CheckResultUpdateArgs<ExtArgs>>): Prisma__CheckResultClient<$Result.GetResult<Prisma.$CheckResultPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CheckResults.
     * @param {CheckResultDeleteManyArgs} args - Arguments to filter CheckResults to delete.
     * @example
     * // Delete a few CheckResults
     * const { count } = await prisma.checkResult.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CheckResultDeleteManyArgs>(args?: SelectSubset<T, CheckResultDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CheckResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckResultUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CheckResults
     * const checkResult = await prisma.checkResult.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CheckResultUpdateManyArgs>(args: SelectSubset<T, CheckResultUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CheckResults and returns the data updated in the database.
     * @param {CheckResultUpdateManyAndReturnArgs} args - Arguments to update many CheckResults.
     * @example
     * // Update many CheckResults
     * const checkResult = await prisma.checkResult.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CheckResults and only return the `id`
     * const checkResultWithIdOnly = await prisma.checkResult.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CheckResultUpdateManyAndReturnArgs>(args: SelectSubset<T, CheckResultUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckResultPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CheckResult.
     * @param {CheckResultUpsertArgs} args - Arguments to update or create a CheckResult.
     * @example
     * // Update or create a CheckResult
     * const checkResult = await prisma.checkResult.upsert({
     *   create: {
     *     // ... data to create a CheckResult
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CheckResult we want to update
     *   }
     * })
     */
    upsert<T extends CheckResultUpsertArgs>(args: SelectSubset<T, CheckResultUpsertArgs<ExtArgs>>): Prisma__CheckResultClient<$Result.GetResult<Prisma.$CheckResultPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CheckResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckResultCountArgs} args - Arguments to filter CheckResults to count.
     * @example
     * // Count the number of CheckResults
     * const count = await prisma.checkResult.count({
     *   where: {
     *     // ... the filter for the CheckResults we want to count
     *   }
     * })
    **/
    count<T extends CheckResultCountArgs>(
      args?: Subset<T, CheckResultCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CheckResultCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CheckResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckResultAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CheckResultAggregateArgs>(args: Subset<T, CheckResultAggregateArgs>): Prisma.PrismaPromise<GetCheckResultAggregateType<T>>

    /**
     * Group by CheckResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckResultGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CheckResultGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CheckResultGroupByArgs['orderBy'] }
        : { orderBy?: CheckResultGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CheckResultGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCheckResultGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CheckResult model
   */
  readonly fields: CheckResultFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CheckResult.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CheckResultClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    monitor<T extends MonitorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MonitorDefaultArgs<ExtArgs>>): Prisma__MonitorClient<$Result.GetResult<Prisma.$MonitorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CheckResult model
   */
  interface CheckResultFieldRefs {
    readonly id: FieldRef<"CheckResult", 'String'>
    readonly monitorId: FieldRef<"CheckResult", 'String'>
    readonly status: FieldRef<"CheckResult", 'String'>
    readonly responseTime: FieldRef<"CheckResult", 'Int'>
    readonly details: FieldRef<"CheckResult", 'Json'>
    readonly checkedAt: FieldRef<"CheckResult", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CheckResult findUnique
   */
  export type CheckResultFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckResult
     */
    select?: CheckResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckResult
     */
    omit?: CheckResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckResultInclude<ExtArgs> | null
    /**
     * Filter, which CheckResult to fetch.
     */
    where: CheckResultWhereUniqueInput
  }

  /**
   * CheckResult findUniqueOrThrow
   */
  export type CheckResultFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckResult
     */
    select?: CheckResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckResult
     */
    omit?: CheckResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckResultInclude<ExtArgs> | null
    /**
     * Filter, which CheckResult to fetch.
     */
    where: CheckResultWhereUniqueInput
  }

  /**
   * CheckResult findFirst
   */
  export type CheckResultFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckResult
     */
    select?: CheckResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckResult
     */
    omit?: CheckResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckResultInclude<ExtArgs> | null
    /**
     * Filter, which CheckResult to fetch.
     */
    where?: CheckResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CheckResults to fetch.
     */
    orderBy?: CheckResultOrderByWithRelationInput | CheckResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CheckResults.
     */
    cursor?: CheckResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CheckResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CheckResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CheckResults.
     */
    distinct?: CheckResultScalarFieldEnum | CheckResultScalarFieldEnum[]
  }

  /**
   * CheckResult findFirstOrThrow
   */
  export type CheckResultFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckResult
     */
    select?: CheckResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckResult
     */
    omit?: CheckResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckResultInclude<ExtArgs> | null
    /**
     * Filter, which CheckResult to fetch.
     */
    where?: CheckResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CheckResults to fetch.
     */
    orderBy?: CheckResultOrderByWithRelationInput | CheckResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CheckResults.
     */
    cursor?: CheckResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CheckResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CheckResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CheckResults.
     */
    distinct?: CheckResultScalarFieldEnum | CheckResultScalarFieldEnum[]
  }

  /**
   * CheckResult findMany
   */
  export type CheckResultFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckResult
     */
    select?: CheckResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckResult
     */
    omit?: CheckResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckResultInclude<ExtArgs> | null
    /**
     * Filter, which CheckResults to fetch.
     */
    where?: CheckResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CheckResults to fetch.
     */
    orderBy?: CheckResultOrderByWithRelationInput | CheckResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CheckResults.
     */
    cursor?: CheckResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CheckResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CheckResults.
     */
    skip?: number
    distinct?: CheckResultScalarFieldEnum | CheckResultScalarFieldEnum[]
  }

  /**
   * CheckResult create
   */
  export type CheckResultCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckResult
     */
    select?: CheckResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckResult
     */
    omit?: CheckResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckResultInclude<ExtArgs> | null
    /**
     * The data needed to create a CheckResult.
     */
    data: XOR<CheckResultCreateInput, CheckResultUncheckedCreateInput>
  }

  /**
   * CheckResult createMany
   */
  export type CheckResultCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CheckResults.
     */
    data: CheckResultCreateManyInput | CheckResultCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CheckResult createManyAndReturn
   */
  export type CheckResultCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckResult
     */
    select?: CheckResultSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CheckResult
     */
    omit?: CheckResultOmit<ExtArgs> | null
    /**
     * The data used to create many CheckResults.
     */
    data: CheckResultCreateManyInput | CheckResultCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckResultIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CheckResult update
   */
  export type CheckResultUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckResult
     */
    select?: CheckResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckResult
     */
    omit?: CheckResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckResultInclude<ExtArgs> | null
    /**
     * The data needed to update a CheckResult.
     */
    data: XOR<CheckResultUpdateInput, CheckResultUncheckedUpdateInput>
    /**
     * Choose, which CheckResult to update.
     */
    where: CheckResultWhereUniqueInput
  }

  /**
   * CheckResult updateMany
   */
  export type CheckResultUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CheckResults.
     */
    data: XOR<CheckResultUpdateManyMutationInput, CheckResultUncheckedUpdateManyInput>
    /**
     * Filter which CheckResults to update
     */
    where?: CheckResultWhereInput
    /**
     * Limit how many CheckResults to update.
     */
    limit?: number
  }

  /**
   * CheckResult updateManyAndReturn
   */
  export type CheckResultUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckResult
     */
    select?: CheckResultSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CheckResult
     */
    omit?: CheckResultOmit<ExtArgs> | null
    /**
     * The data used to update CheckResults.
     */
    data: XOR<CheckResultUpdateManyMutationInput, CheckResultUncheckedUpdateManyInput>
    /**
     * Filter which CheckResults to update
     */
    where?: CheckResultWhereInput
    /**
     * Limit how many CheckResults to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckResultIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CheckResult upsert
   */
  export type CheckResultUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckResult
     */
    select?: CheckResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckResult
     */
    omit?: CheckResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckResultInclude<ExtArgs> | null
    /**
     * The filter to search for the CheckResult to update in case it exists.
     */
    where: CheckResultWhereUniqueInput
    /**
     * In case the CheckResult found by the `where` argument doesn't exist, create a new CheckResult with this data.
     */
    create: XOR<CheckResultCreateInput, CheckResultUncheckedCreateInput>
    /**
     * In case the CheckResult was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CheckResultUpdateInput, CheckResultUncheckedUpdateInput>
  }

  /**
   * CheckResult delete
   */
  export type CheckResultDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckResult
     */
    select?: CheckResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckResult
     */
    omit?: CheckResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckResultInclude<ExtArgs> | null
    /**
     * Filter which CheckResult to delete.
     */
    where: CheckResultWhereUniqueInput
  }

  /**
   * CheckResult deleteMany
   */
  export type CheckResultDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CheckResults to delete
     */
    where?: CheckResultWhereInput
    /**
     * Limit how many CheckResults to delete.
     */
    limit?: number
  }

  /**
   * CheckResult without action
   */
  export type CheckResultDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckResult
     */
    select?: CheckResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckResult
     */
    omit?: CheckResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckResultInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: $Enums.NotificationType | null
    address: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: $Enums.NotificationType | null
    address: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    address: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NotificationMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    address?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    address?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    address?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: string
    userId: string
    type: $Enums.NotificationType
    address: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    address?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    sent?: boolean | Notification$sentArgs<ExtArgs>
    _count?: boolean | NotificationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    address?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    address?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    address?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "address" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    sent?: boolean | Notification$sentArgs<ExtArgs>
    _count?: boolean | NotificationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      sent: Prisma.$NotificationSentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: $Enums.NotificationType
      address: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sent<T extends Notification$sentArgs<ExtArgs> = {}>(args?: Subset<T, Notification$sentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationSentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'String'>
    readonly userId: FieldRef<"Notification", 'String'>
    readonly type: FieldRef<"Notification", 'NotificationType'>
    readonly address: FieldRef<"Notification", 'String'>
    readonly isActive: FieldRef<"Notification", 'Boolean'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
    readonly updatedAt: FieldRef<"Notification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification updateManyAndReturn
   */
  export type NotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification.sent
   */
  export type Notification$sentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationSent
     */
    select?: NotificationSentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationSent
     */
    omit?: NotificationSentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationSentInclude<ExtArgs> | null
    where?: NotificationSentWhereInput
    orderBy?: NotificationSentOrderByWithRelationInput | NotificationSentOrderByWithRelationInput[]
    cursor?: NotificationSentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationSentScalarFieldEnum | NotificationSentScalarFieldEnum[]
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Model NotificationSent
   */

  export type AggregateNotificationSent = {
    _count: NotificationSentCountAggregateOutputType | null
    _min: NotificationSentMinAggregateOutputType | null
    _max: NotificationSentMaxAggregateOutputType | null
  }

  export type NotificationSentMinAggregateOutputType = {
    id: string | null
    notificationId: string | null
    monitorId: string | null
    sentAt: Date | null
    message: string | null
  }

  export type NotificationSentMaxAggregateOutputType = {
    id: string | null
    notificationId: string | null
    monitorId: string | null
    sentAt: Date | null
    message: string | null
  }

  export type NotificationSentCountAggregateOutputType = {
    id: number
    notificationId: number
    monitorId: number
    sentAt: number
    message: number
    _all: number
  }


  export type NotificationSentMinAggregateInputType = {
    id?: true
    notificationId?: true
    monitorId?: true
    sentAt?: true
    message?: true
  }

  export type NotificationSentMaxAggregateInputType = {
    id?: true
    notificationId?: true
    monitorId?: true
    sentAt?: true
    message?: true
  }

  export type NotificationSentCountAggregateInputType = {
    id?: true
    notificationId?: true
    monitorId?: true
    sentAt?: true
    message?: true
    _all?: true
  }

  export type NotificationSentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NotificationSent to aggregate.
     */
    where?: NotificationSentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationSents to fetch.
     */
    orderBy?: NotificationSentOrderByWithRelationInput | NotificationSentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationSentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationSents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationSents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NotificationSents
    **/
    _count?: true | NotificationSentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationSentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationSentMaxAggregateInputType
  }

  export type GetNotificationSentAggregateType<T extends NotificationSentAggregateArgs> = {
        [P in keyof T & keyof AggregateNotificationSent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotificationSent[P]>
      : GetScalarType<T[P], AggregateNotificationSent[P]>
  }




  export type NotificationSentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationSentWhereInput
    orderBy?: NotificationSentOrderByWithAggregationInput | NotificationSentOrderByWithAggregationInput[]
    by: NotificationSentScalarFieldEnum[] | NotificationSentScalarFieldEnum
    having?: NotificationSentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationSentCountAggregateInputType | true
    _min?: NotificationSentMinAggregateInputType
    _max?: NotificationSentMaxAggregateInputType
  }

  export type NotificationSentGroupByOutputType = {
    id: string
    notificationId: string
    monitorId: string | null
    sentAt: Date
    message: string
    _count: NotificationSentCountAggregateOutputType | null
    _min: NotificationSentMinAggregateOutputType | null
    _max: NotificationSentMaxAggregateOutputType | null
  }

  type GetNotificationSentGroupByPayload<T extends NotificationSentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationSentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationSentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationSentGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationSentGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    notificationId?: boolean
    monitorId?: boolean
    sentAt?: boolean
    message?: boolean
    notification?: boolean | NotificationDefaultArgs<ExtArgs>
    monitor?: boolean | NotificationSent$monitorArgs<ExtArgs>
  }, ExtArgs["result"]["notificationSent"]>

  export type NotificationSentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    notificationId?: boolean
    monitorId?: boolean
    sentAt?: boolean
    message?: boolean
    notification?: boolean | NotificationDefaultArgs<ExtArgs>
    monitor?: boolean | NotificationSent$monitorArgs<ExtArgs>
  }, ExtArgs["result"]["notificationSent"]>

  export type NotificationSentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    notificationId?: boolean
    monitorId?: boolean
    sentAt?: boolean
    message?: boolean
    notification?: boolean | NotificationDefaultArgs<ExtArgs>
    monitor?: boolean | NotificationSent$monitorArgs<ExtArgs>
  }, ExtArgs["result"]["notificationSent"]>

  export type NotificationSentSelectScalar = {
    id?: boolean
    notificationId?: boolean
    monitorId?: boolean
    sentAt?: boolean
    message?: boolean
  }

  export type NotificationSentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "notificationId" | "monitorId" | "sentAt" | "message", ExtArgs["result"]["notificationSent"]>
  export type NotificationSentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notification?: boolean | NotificationDefaultArgs<ExtArgs>
    monitor?: boolean | NotificationSent$monitorArgs<ExtArgs>
  }
  export type NotificationSentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notification?: boolean | NotificationDefaultArgs<ExtArgs>
    monitor?: boolean | NotificationSent$monitorArgs<ExtArgs>
  }
  export type NotificationSentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notification?: boolean | NotificationDefaultArgs<ExtArgs>
    monitor?: boolean | NotificationSent$monitorArgs<ExtArgs>
  }

  export type $NotificationSentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NotificationSent"
    objects: {
      notification: Prisma.$NotificationPayload<ExtArgs>
      monitor: Prisma.$MonitorPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      notificationId: string
      monitorId: string | null
      sentAt: Date
      message: string
    }, ExtArgs["result"]["notificationSent"]>
    composites: {}
  }

  type NotificationSentGetPayload<S extends boolean | null | undefined | NotificationSentDefaultArgs> = $Result.GetResult<Prisma.$NotificationSentPayload, S>

  type NotificationSentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationSentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationSentCountAggregateInputType | true
    }

  export interface NotificationSentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NotificationSent'], meta: { name: 'NotificationSent' } }
    /**
     * Find zero or one NotificationSent that matches the filter.
     * @param {NotificationSentFindUniqueArgs} args - Arguments to find a NotificationSent
     * @example
     * // Get one NotificationSent
     * const notificationSent = await prisma.notificationSent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationSentFindUniqueArgs>(args: SelectSubset<T, NotificationSentFindUniqueArgs<ExtArgs>>): Prisma__NotificationSentClient<$Result.GetResult<Prisma.$NotificationSentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NotificationSent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationSentFindUniqueOrThrowArgs} args - Arguments to find a NotificationSent
     * @example
     * // Get one NotificationSent
     * const notificationSent = await prisma.notificationSent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationSentFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationSentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationSentClient<$Result.GetResult<Prisma.$NotificationSentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NotificationSent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationSentFindFirstArgs} args - Arguments to find a NotificationSent
     * @example
     * // Get one NotificationSent
     * const notificationSent = await prisma.notificationSent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationSentFindFirstArgs>(args?: SelectSubset<T, NotificationSentFindFirstArgs<ExtArgs>>): Prisma__NotificationSentClient<$Result.GetResult<Prisma.$NotificationSentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NotificationSent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationSentFindFirstOrThrowArgs} args - Arguments to find a NotificationSent
     * @example
     * // Get one NotificationSent
     * const notificationSent = await prisma.notificationSent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationSentFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationSentFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationSentClient<$Result.GetResult<Prisma.$NotificationSentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NotificationSents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationSentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NotificationSents
     * const notificationSents = await prisma.notificationSent.findMany()
     * 
     * // Get first 10 NotificationSents
     * const notificationSents = await prisma.notificationSent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationSentWithIdOnly = await prisma.notificationSent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationSentFindManyArgs>(args?: SelectSubset<T, NotificationSentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationSentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NotificationSent.
     * @param {NotificationSentCreateArgs} args - Arguments to create a NotificationSent.
     * @example
     * // Create one NotificationSent
     * const NotificationSent = await prisma.notificationSent.create({
     *   data: {
     *     // ... data to create a NotificationSent
     *   }
     * })
     * 
     */
    create<T extends NotificationSentCreateArgs>(args: SelectSubset<T, NotificationSentCreateArgs<ExtArgs>>): Prisma__NotificationSentClient<$Result.GetResult<Prisma.$NotificationSentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NotificationSents.
     * @param {NotificationSentCreateManyArgs} args - Arguments to create many NotificationSents.
     * @example
     * // Create many NotificationSents
     * const notificationSent = await prisma.notificationSent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationSentCreateManyArgs>(args?: SelectSubset<T, NotificationSentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NotificationSents and returns the data saved in the database.
     * @param {NotificationSentCreateManyAndReturnArgs} args - Arguments to create many NotificationSents.
     * @example
     * // Create many NotificationSents
     * const notificationSent = await prisma.notificationSent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NotificationSents and only return the `id`
     * const notificationSentWithIdOnly = await prisma.notificationSent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationSentCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationSentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationSentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NotificationSent.
     * @param {NotificationSentDeleteArgs} args - Arguments to delete one NotificationSent.
     * @example
     * // Delete one NotificationSent
     * const NotificationSent = await prisma.notificationSent.delete({
     *   where: {
     *     // ... filter to delete one NotificationSent
     *   }
     * })
     * 
     */
    delete<T extends NotificationSentDeleteArgs>(args: SelectSubset<T, NotificationSentDeleteArgs<ExtArgs>>): Prisma__NotificationSentClient<$Result.GetResult<Prisma.$NotificationSentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NotificationSent.
     * @param {NotificationSentUpdateArgs} args - Arguments to update one NotificationSent.
     * @example
     * // Update one NotificationSent
     * const notificationSent = await prisma.notificationSent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationSentUpdateArgs>(args: SelectSubset<T, NotificationSentUpdateArgs<ExtArgs>>): Prisma__NotificationSentClient<$Result.GetResult<Prisma.$NotificationSentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NotificationSents.
     * @param {NotificationSentDeleteManyArgs} args - Arguments to filter NotificationSents to delete.
     * @example
     * // Delete a few NotificationSents
     * const { count } = await prisma.notificationSent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationSentDeleteManyArgs>(args?: SelectSubset<T, NotificationSentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NotificationSents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationSentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NotificationSents
     * const notificationSent = await prisma.notificationSent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationSentUpdateManyArgs>(args: SelectSubset<T, NotificationSentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NotificationSents and returns the data updated in the database.
     * @param {NotificationSentUpdateManyAndReturnArgs} args - Arguments to update many NotificationSents.
     * @example
     * // Update many NotificationSents
     * const notificationSent = await prisma.notificationSent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NotificationSents and only return the `id`
     * const notificationSentWithIdOnly = await prisma.notificationSent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NotificationSentUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationSentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationSentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NotificationSent.
     * @param {NotificationSentUpsertArgs} args - Arguments to update or create a NotificationSent.
     * @example
     * // Update or create a NotificationSent
     * const notificationSent = await prisma.notificationSent.upsert({
     *   create: {
     *     // ... data to create a NotificationSent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NotificationSent we want to update
     *   }
     * })
     */
    upsert<T extends NotificationSentUpsertArgs>(args: SelectSubset<T, NotificationSentUpsertArgs<ExtArgs>>): Prisma__NotificationSentClient<$Result.GetResult<Prisma.$NotificationSentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NotificationSents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationSentCountArgs} args - Arguments to filter NotificationSents to count.
     * @example
     * // Count the number of NotificationSents
     * const count = await prisma.notificationSent.count({
     *   where: {
     *     // ... the filter for the NotificationSents we want to count
     *   }
     * })
    **/
    count<T extends NotificationSentCountArgs>(
      args?: Subset<T, NotificationSentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationSentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NotificationSent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationSentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationSentAggregateArgs>(args: Subset<T, NotificationSentAggregateArgs>): Prisma.PrismaPromise<GetNotificationSentAggregateType<T>>

    /**
     * Group by NotificationSent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationSentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificationSentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationSentGroupByArgs['orderBy'] }
        : { orderBy?: NotificationSentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificationSentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationSentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NotificationSent model
   */
  readonly fields: NotificationSentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NotificationSent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationSentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    notification<T extends NotificationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NotificationDefaultArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    monitor<T extends NotificationSent$monitorArgs<ExtArgs> = {}>(args?: Subset<T, NotificationSent$monitorArgs<ExtArgs>>): Prisma__MonitorClient<$Result.GetResult<Prisma.$MonitorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the NotificationSent model
   */
  interface NotificationSentFieldRefs {
    readonly id: FieldRef<"NotificationSent", 'String'>
    readonly notificationId: FieldRef<"NotificationSent", 'String'>
    readonly monitorId: FieldRef<"NotificationSent", 'String'>
    readonly sentAt: FieldRef<"NotificationSent", 'DateTime'>
    readonly message: FieldRef<"NotificationSent", 'String'>
  }
    

  // Custom InputTypes
  /**
   * NotificationSent findUnique
   */
  export type NotificationSentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationSent
     */
    select?: NotificationSentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationSent
     */
    omit?: NotificationSentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationSentInclude<ExtArgs> | null
    /**
     * Filter, which NotificationSent to fetch.
     */
    where: NotificationSentWhereUniqueInput
  }

  /**
   * NotificationSent findUniqueOrThrow
   */
  export type NotificationSentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationSent
     */
    select?: NotificationSentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationSent
     */
    omit?: NotificationSentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationSentInclude<ExtArgs> | null
    /**
     * Filter, which NotificationSent to fetch.
     */
    where: NotificationSentWhereUniqueInput
  }

  /**
   * NotificationSent findFirst
   */
  export type NotificationSentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationSent
     */
    select?: NotificationSentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationSent
     */
    omit?: NotificationSentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationSentInclude<ExtArgs> | null
    /**
     * Filter, which NotificationSent to fetch.
     */
    where?: NotificationSentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationSents to fetch.
     */
    orderBy?: NotificationSentOrderByWithRelationInput | NotificationSentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NotificationSents.
     */
    cursor?: NotificationSentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationSents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationSents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NotificationSents.
     */
    distinct?: NotificationSentScalarFieldEnum | NotificationSentScalarFieldEnum[]
  }

  /**
   * NotificationSent findFirstOrThrow
   */
  export type NotificationSentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationSent
     */
    select?: NotificationSentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationSent
     */
    omit?: NotificationSentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationSentInclude<ExtArgs> | null
    /**
     * Filter, which NotificationSent to fetch.
     */
    where?: NotificationSentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationSents to fetch.
     */
    orderBy?: NotificationSentOrderByWithRelationInput | NotificationSentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NotificationSents.
     */
    cursor?: NotificationSentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationSents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationSents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NotificationSents.
     */
    distinct?: NotificationSentScalarFieldEnum | NotificationSentScalarFieldEnum[]
  }

  /**
   * NotificationSent findMany
   */
  export type NotificationSentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationSent
     */
    select?: NotificationSentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationSent
     */
    omit?: NotificationSentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationSentInclude<ExtArgs> | null
    /**
     * Filter, which NotificationSents to fetch.
     */
    where?: NotificationSentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationSents to fetch.
     */
    orderBy?: NotificationSentOrderByWithRelationInput | NotificationSentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NotificationSents.
     */
    cursor?: NotificationSentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationSents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationSents.
     */
    skip?: number
    distinct?: NotificationSentScalarFieldEnum | NotificationSentScalarFieldEnum[]
  }

  /**
   * NotificationSent create
   */
  export type NotificationSentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationSent
     */
    select?: NotificationSentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationSent
     */
    omit?: NotificationSentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationSentInclude<ExtArgs> | null
    /**
     * The data needed to create a NotificationSent.
     */
    data: XOR<NotificationSentCreateInput, NotificationSentUncheckedCreateInput>
  }

  /**
   * NotificationSent createMany
   */
  export type NotificationSentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NotificationSents.
     */
    data: NotificationSentCreateManyInput | NotificationSentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NotificationSent createManyAndReturn
   */
  export type NotificationSentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationSent
     */
    select?: NotificationSentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationSent
     */
    omit?: NotificationSentOmit<ExtArgs> | null
    /**
     * The data used to create many NotificationSents.
     */
    data: NotificationSentCreateManyInput | NotificationSentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationSentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * NotificationSent update
   */
  export type NotificationSentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationSent
     */
    select?: NotificationSentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationSent
     */
    omit?: NotificationSentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationSentInclude<ExtArgs> | null
    /**
     * The data needed to update a NotificationSent.
     */
    data: XOR<NotificationSentUpdateInput, NotificationSentUncheckedUpdateInput>
    /**
     * Choose, which NotificationSent to update.
     */
    where: NotificationSentWhereUniqueInput
  }

  /**
   * NotificationSent updateMany
   */
  export type NotificationSentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NotificationSents.
     */
    data: XOR<NotificationSentUpdateManyMutationInput, NotificationSentUncheckedUpdateManyInput>
    /**
     * Filter which NotificationSents to update
     */
    where?: NotificationSentWhereInput
    /**
     * Limit how many NotificationSents to update.
     */
    limit?: number
  }

  /**
   * NotificationSent updateManyAndReturn
   */
  export type NotificationSentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationSent
     */
    select?: NotificationSentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationSent
     */
    omit?: NotificationSentOmit<ExtArgs> | null
    /**
     * The data used to update NotificationSents.
     */
    data: XOR<NotificationSentUpdateManyMutationInput, NotificationSentUncheckedUpdateManyInput>
    /**
     * Filter which NotificationSents to update
     */
    where?: NotificationSentWhereInput
    /**
     * Limit how many NotificationSents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationSentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * NotificationSent upsert
   */
  export type NotificationSentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationSent
     */
    select?: NotificationSentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationSent
     */
    omit?: NotificationSentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationSentInclude<ExtArgs> | null
    /**
     * The filter to search for the NotificationSent to update in case it exists.
     */
    where: NotificationSentWhereUniqueInput
    /**
     * In case the NotificationSent found by the `where` argument doesn't exist, create a new NotificationSent with this data.
     */
    create: XOR<NotificationSentCreateInput, NotificationSentUncheckedCreateInput>
    /**
     * In case the NotificationSent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationSentUpdateInput, NotificationSentUncheckedUpdateInput>
  }

  /**
   * NotificationSent delete
   */
  export type NotificationSentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationSent
     */
    select?: NotificationSentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationSent
     */
    omit?: NotificationSentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationSentInclude<ExtArgs> | null
    /**
     * Filter which NotificationSent to delete.
     */
    where: NotificationSentWhereUniqueInput
  }

  /**
   * NotificationSent deleteMany
   */
  export type NotificationSentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NotificationSents to delete
     */
    where?: NotificationSentWhereInput
    /**
     * Limit how many NotificationSents to delete.
     */
    limit?: number
  }

  /**
   * NotificationSent.monitor
   */
  export type NotificationSent$monitorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monitor
     */
    select?: MonitorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Monitor
     */
    omit?: MonitorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MonitorInclude<ExtArgs> | null
    where?: MonitorWhereInput
  }

  /**
   * NotificationSent without action
   */
  export type NotificationSentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationSent
     */
    select?: NotificationSentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationSent
     */
    omit?: NotificationSentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationSentInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const MonitorScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    type: 'type',
    config: 'config',
    isActive: 'isActive',
    checkInterval: 'checkInterval',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MonitorScalarFieldEnum = (typeof MonitorScalarFieldEnum)[keyof typeof MonitorScalarFieldEnum]


  export const CheckResultScalarFieldEnum: {
    id: 'id',
    monitorId: 'monitorId',
    status: 'status',
    responseTime: 'responseTime',
    details: 'details',
    checkedAt: 'checkedAt'
  };

  export type CheckResultScalarFieldEnum = (typeof CheckResultScalarFieldEnum)[keyof typeof CheckResultScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    address: 'address',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const NotificationSentScalarFieldEnum: {
    id: 'id',
    notificationId: 'notificationId',
    monitorId: 'monitorId',
    sentAt: 'sentAt',
    message: 'message'
  };

  export type NotificationSentScalarFieldEnum = (typeof NotificationSentScalarFieldEnum)[keyof typeof NotificationSentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'MonitorType'
   */
  export type EnumMonitorTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MonitorType'>
    


  /**
   * Reference to a field of type 'MonitorType[]'
   */
  export type ListEnumMonitorTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MonitorType[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'NotificationType'
   */
  export type EnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType'>
    


  /**
   * Reference to a field of type 'NotificationType[]'
   */
  export type ListEnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    monitors?: MonitorListRelationFilter
    notifications?: NotificationListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    monitors?: MonitorOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    monitors?: MonitorListRelationFilter
    notifications?: NotificationListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type MonitorWhereInput = {
    AND?: MonitorWhereInput | MonitorWhereInput[]
    OR?: MonitorWhereInput[]
    NOT?: MonitorWhereInput | MonitorWhereInput[]
    id?: StringFilter<"Monitor"> | string
    userId?: StringFilter<"Monitor"> | string
    name?: StringFilter<"Monitor"> | string
    type?: EnumMonitorTypeFilter<"Monitor"> | $Enums.MonitorType
    config?: JsonFilter<"Monitor">
    isActive?: BoolFilter<"Monitor"> | boolean
    checkInterval?: IntFilter<"Monitor"> | number
    createdAt?: DateTimeFilter<"Monitor"> | Date | string
    updatedAt?: DateTimeFilter<"Monitor"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    checkResults?: CheckResultListRelationFilter
    notificationSents?: NotificationSentListRelationFilter
  }

  export type MonitorOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    config?: SortOrder
    isActive?: SortOrder
    checkInterval?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    checkResults?: CheckResultOrderByRelationAggregateInput
    notificationSents?: NotificationSentOrderByRelationAggregateInput
  }

  export type MonitorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MonitorWhereInput | MonitorWhereInput[]
    OR?: MonitorWhereInput[]
    NOT?: MonitorWhereInput | MonitorWhereInput[]
    userId?: StringFilter<"Monitor"> | string
    name?: StringFilter<"Monitor"> | string
    type?: EnumMonitorTypeFilter<"Monitor"> | $Enums.MonitorType
    config?: JsonFilter<"Monitor">
    isActive?: BoolFilter<"Monitor"> | boolean
    checkInterval?: IntFilter<"Monitor"> | number
    createdAt?: DateTimeFilter<"Monitor"> | Date | string
    updatedAt?: DateTimeFilter<"Monitor"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    checkResults?: CheckResultListRelationFilter
    notificationSents?: NotificationSentListRelationFilter
  }, "id">

  export type MonitorOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    config?: SortOrder
    isActive?: SortOrder
    checkInterval?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MonitorCountOrderByAggregateInput
    _avg?: MonitorAvgOrderByAggregateInput
    _max?: MonitorMaxOrderByAggregateInput
    _min?: MonitorMinOrderByAggregateInput
    _sum?: MonitorSumOrderByAggregateInput
  }

  export type MonitorScalarWhereWithAggregatesInput = {
    AND?: MonitorScalarWhereWithAggregatesInput | MonitorScalarWhereWithAggregatesInput[]
    OR?: MonitorScalarWhereWithAggregatesInput[]
    NOT?: MonitorScalarWhereWithAggregatesInput | MonitorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Monitor"> | string
    userId?: StringWithAggregatesFilter<"Monitor"> | string
    name?: StringWithAggregatesFilter<"Monitor"> | string
    type?: EnumMonitorTypeWithAggregatesFilter<"Monitor"> | $Enums.MonitorType
    config?: JsonWithAggregatesFilter<"Monitor">
    isActive?: BoolWithAggregatesFilter<"Monitor"> | boolean
    checkInterval?: IntWithAggregatesFilter<"Monitor"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Monitor"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Monitor"> | Date | string
  }

  export type CheckResultWhereInput = {
    AND?: CheckResultWhereInput | CheckResultWhereInput[]
    OR?: CheckResultWhereInput[]
    NOT?: CheckResultWhereInput | CheckResultWhereInput[]
    id?: StringFilter<"CheckResult"> | string
    monitorId?: StringFilter<"CheckResult"> | string
    status?: StringFilter<"CheckResult"> | string
    responseTime?: IntNullableFilter<"CheckResult"> | number | null
    details?: JsonNullableFilter<"CheckResult">
    checkedAt?: DateTimeFilter<"CheckResult"> | Date | string
    monitor?: XOR<MonitorScalarRelationFilter, MonitorWhereInput>
  }

  export type CheckResultOrderByWithRelationInput = {
    id?: SortOrder
    monitorId?: SortOrder
    status?: SortOrder
    responseTime?: SortOrderInput | SortOrder
    details?: SortOrderInput | SortOrder
    checkedAt?: SortOrder
    monitor?: MonitorOrderByWithRelationInput
  }

  export type CheckResultWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CheckResultWhereInput | CheckResultWhereInput[]
    OR?: CheckResultWhereInput[]
    NOT?: CheckResultWhereInput | CheckResultWhereInput[]
    monitorId?: StringFilter<"CheckResult"> | string
    status?: StringFilter<"CheckResult"> | string
    responseTime?: IntNullableFilter<"CheckResult"> | number | null
    details?: JsonNullableFilter<"CheckResult">
    checkedAt?: DateTimeFilter<"CheckResult"> | Date | string
    monitor?: XOR<MonitorScalarRelationFilter, MonitorWhereInput>
  }, "id">

  export type CheckResultOrderByWithAggregationInput = {
    id?: SortOrder
    monitorId?: SortOrder
    status?: SortOrder
    responseTime?: SortOrderInput | SortOrder
    details?: SortOrderInput | SortOrder
    checkedAt?: SortOrder
    _count?: CheckResultCountOrderByAggregateInput
    _avg?: CheckResultAvgOrderByAggregateInput
    _max?: CheckResultMaxOrderByAggregateInput
    _min?: CheckResultMinOrderByAggregateInput
    _sum?: CheckResultSumOrderByAggregateInput
  }

  export type CheckResultScalarWhereWithAggregatesInput = {
    AND?: CheckResultScalarWhereWithAggregatesInput | CheckResultScalarWhereWithAggregatesInput[]
    OR?: CheckResultScalarWhereWithAggregatesInput[]
    NOT?: CheckResultScalarWhereWithAggregatesInput | CheckResultScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CheckResult"> | string
    monitorId?: StringWithAggregatesFilter<"CheckResult"> | string
    status?: StringWithAggregatesFilter<"CheckResult"> | string
    responseTime?: IntNullableWithAggregatesFilter<"CheckResult"> | number | null
    details?: JsonNullableWithAggregatesFilter<"CheckResult">
    checkedAt?: DateTimeWithAggregatesFilter<"CheckResult"> | Date | string
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: StringFilter<"Notification"> | string
    userId?: StringFilter<"Notification"> | string
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    address?: StringFilter<"Notification"> | string
    isActive?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    updatedAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    sent?: NotificationSentListRelationFilter
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    address?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    sent?: NotificationSentOrderByRelationAggregateInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    userId?: StringFilter<"Notification"> | string
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    address?: StringFilter<"Notification"> | string
    isActive?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    updatedAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    sent?: NotificationSentListRelationFilter
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    address?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notification"> | string
    userId?: StringWithAggregatesFilter<"Notification"> | string
    type?: EnumNotificationTypeWithAggregatesFilter<"Notification"> | $Enums.NotificationType
    address?: StringWithAggregatesFilter<"Notification"> | string
    isActive?: BoolWithAggregatesFilter<"Notification"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
  }

  export type NotificationSentWhereInput = {
    AND?: NotificationSentWhereInput | NotificationSentWhereInput[]
    OR?: NotificationSentWhereInput[]
    NOT?: NotificationSentWhereInput | NotificationSentWhereInput[]
    id?: StringFilter<"NotificationSent"> | string
    notificationId?: StringFilter<"NotificationSent"> | string
    monitorId?: StringNullableFilter<"NotificationSent"> | string | null
    sentAt?: DateTimeFilter<"NotificationSent"> | Date | string
    message?: StringFilter<"NotificationSent"> | string
    notification?: XOR<NotificationScalarRelationFilter, NotificationWhereInput>
    monitor?: XOR<MonitorNullableScalarRelationFilter, MonitorWhereInput> | null
  }

  export type NotificationSentOrderByWithRelationInput = {
    id?: SortOrder
    notificationId?: SortOrder
    monitorId?: SortOrderInput | SortOrder
    sentAt?: SortOrder
    message?: SortOrder
    notification?: NotificationOrderByWithRelationInput
    monitor?: MonitorOrderByWithRelationInput
  }

  export type NotificationSentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationSentWhereInput | NotificationSentWhereInput[]
    OR?: NotificationSentWhereInput[]
    NOT?: NotificationSentWhereInput | NotificationSentWhereInput[]
    notificationId?: StringFilter<"NotificationSent"> | string
    monitorId?: StringNullableFilter<"NotificationSent"> | string | null
    sentAt?: DateTimeFilter<"NotificationSent"> | Date | string
    message?: StringFilter<"NotificationSent"> | string
    notification?: XOR<NotificationScalarRelationFilter, NotificationWhereInput>
    monitor?: XOR<MonitorNullableScalarRelationFilter, MonitorWhereInput> | null
  }, "id">

  export type NotificationSentOrderByWithAggregationInput = {
    id?: SortOrder
    notificationId?: SortOrder
    monitorId?: SortOrderInput | SortOrder
    sentAt?: SortOrder
    message?: SortOrder
    _count?: NotificationSentCountOrderByAggregateInput
    _max?: NotificationSentMaxOrderByAggregateInput
    _min?: NotificationSentMinOrderByAggregateInput
  }

  export type NotificationSentScalarWhereWithAggregatesInput = {
    AND?: NotificationSentScalarWhereWithAggregatesInput | NotificationSentScalarWhereWithAggregatesInput[]
    OR?: NotificationSentScalarWhereWithAggregatesInput[]
    NOT?: NotificationSentScalarWhereWithAggregatesInput | NotificationSentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NotificationSent"> | string
    notificationId?: StringWithAggregatesFilter<"NotificationSent"> | string
    monitorId?: StringNullableWithAggregatesFilter<"NotificationSent"> | string | null
    sentAt?: DateTimeWithAggregatesFilter<"NotificationSent"> | Date | string
    message?: StringWithAggregatesFilter<"NotificationSent"> | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    monitors?: MonitorCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    monitors?: MonitorUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    monitors?: MonitorUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    monitors?: MonitorUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonitorCreateInput = {
    id?: string
    name: string
    type: $Enums.MonitorType
    config: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    checkInterval: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutMonitorsInput
    checkResults?: CheckResultCreateNestedManyWithoutMonitorInput
    notificationSents?: NotificationSentCreateNestedManyWithoutMonitorInput
  }

  export type MonitorUncheckedCreateInput = {
    id?: string
    userId: string
    name: string
    type: $Enums.MonitorType
    config: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    checkInterval: number
    createdAt?: Date | string
    updatedAt?: Date | string
    checkResults?: CheckResultUncheckedCreateNestedManyWithoutMonitorInput
    notificationSents?: NotificationSentUncheckedCreateNestedManyWithoutMonitorInput
  }

  export type MonitorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumMonitorTypeFieldUpdateOperationsInput | $Enums.MonitorType
    config?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    checkInterval?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMonitorsNestedInput
    checkResults?: CheckResultUpdateManyWithoutMonitorNestedInput
    notificationSents?: NotificationSentUpdateManyWithoutMonitorNestedInput
  }

  export type MonitorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumMonitorTypeFieldUpdateOperationsInput | $Enums.MonitorType
    config?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    checkInterval?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkResults?: CheckResultUncheckedUpdateManyWithoutMonitorNestedInput
    notificationSents?: NotificationSentUncheckedUpdateManyWithoutMonitorNestedInput
  }

  export type MonitorCreateManyInput = {
    id?: string
    userId: string
    name: string
    type: $Enums.MonitorType
    config: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    checkInterval: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MonitorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumMonitorTypeFieldUpdateOperationsInput | $Enums.MonitorType
    config?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    checkInterval?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonitorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumMonitorTypeFieldUpdateOperationsInput | $Enums.MonitorType
    config?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    checkInterval?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckResultCreateInput = {
    id?: string
    status: string
    responseTime?: number | null
    details?: NullableJsonNullValueInput | InputJsonValue
    checkedAt?: Date | string
    monitor: MonitorCreateNestedOneWithoutCheckResultsInput
  }

  export type CheckResultUncheckedCreateInput = {
    id?: string
    monitorId: string
    status: string
    responseTime?: number | null
    details?: NullableJsonNullValueInput | InputJsonValue
    checkedAt?: Date | string
  }

  export type CheckResultUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    responseTime?: NullableIntFieldUpdateOperationsInput | number | null
    details?: NullableJsonNullValueInput | InputJsonValue
    checkedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    monitor?: MonitorUpdateOneRequiredWithoutCheckResultsNestedInput
  }

  export type CheckResultUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    monitorId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    responseTime?: NullableIntFieldUpdateOperationsInput | number | null
    details?: NullableJsonNullValueInput | InputJsonValue
    checkedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckResultCreateManyInput = {
    id?: string
    monitorId: string
    status: string
    responseTime?: number | null
    details?: NullableJsonNullValueInput | InputJsonValue
    checkedAt?: Date | string
  }

  export type CheckResultUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    responseTime?: NullableIntFieldUpdateOperationsInput | number | null
    details?: NullableJsonNullValueInput | InputJsonValue
    checkedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckResultUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    monitorId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    responseTime?: NullableIntFieldUpdateOperationsInput | number | null
    details?: NullableJsonNullValueInput | InputJsonValue
    checkedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateInput = {
    id?: string
    type: $Enums.NotificationType
    address: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutNotificationsInput
    sent?: NotificationSentCreateNestedManyWithoutNotificationInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: string
    userId: string
    type: $Enums.NotificationType
    address: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    sent?: NotificationSentUncheckedCreateNestedManyWithoutNotificationInput
  }

  export type NotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    address?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
    sent?: NotificationSentUpdateManyWithoutNotificationNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    address?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sent?: NotificationSentUncheckedUpdateManyWithoutNotificationNestedInput
  }

  export type NotificationCreateManyInput = {
    id?: string
    userId: string
    type: $Enums.NotificationType
    address: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    address?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    address?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationSentCreateInput = {
    id?: string
    sentAt?: Date | string
    message: string
    notification: NotificationCreateNestedOneWithoutSentInput
    monitor?: MonitorCreateNestedOneWithoutNotificationSentsInput
  }

  export type NotificationSentUncheckedCreateInput = {
    id?: string
    notificationId: string
    monitorId?: string | null
    sentAt?: Date | string
    message: string
  }

  export type NotificationSentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: StringFieldUpdateOperationsInput | string
    notification?: NotificationUpdateOneRequiredWithoutSentNestedInput
    monitor?: MonitorUpdateOneWithoutNotificationSentsNestedInput
  }

  export type NotificationSentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    notificationId?: StringFieldUpdateOperationsInput | string
    monitorId?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationSentCreateManyInput = {
    id?: string
    notificationId: string
    monitorId?: string | null
    sentAt?: Date | string
    message: string
  }

  export type NotificationSentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationSentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    notificationId?: StringFieldUpdateOperationsInput | string
    monitorId?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type MonitorListRelationFilter = {
    every?: MonitorWhereInput
    some?: MonitorWhereInput
    none?: MonitorWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MonitorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumMonitorTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MonitorType | EnumMonitorTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MonitorType[] | ListEnumMonitorTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MonitorType[] | ListEnumMonitorTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMonitorTypeFilter<$PrismaModel> | $Enums.MonitorType
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CheckResultListRelationFilter = {
    every?: CheckResultWhereInput
    some?: CheckResultWhereInput
    none?: CheckResultWhereInput
  }

  export type NotificationSentListRelationFilter = {
    every?: NotificationSentWhereInput
    some?: NotificationSentWhereInput
    none?: NotificationSentWhereInput
  }

  export type CheckResultOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationSentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MonitorCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    config?: SortOrder
    isActive?: SortOrder
    checkInterval?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MonitorAvgOrderByAggregateInput = {
    checkInterval?: SortOrder
  }

  export type MonitorMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    isActive?: SortOrder
    checkInterval?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MonitorMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    isActive?: SortOrder
    checkInterval?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MonitorSumOrderByAggregateInput = {
    checkInterval?: SortOrder
  }

  export type EnumMonitorTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MonitorType | EnumMonitorTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MonitorType[] | ListEnumMonitorTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MonitorType[] | ListEnumMonitorTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMonitorTypeWithAggregatesFilter<$PrismaModel> | $Enums.MonitorType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMonitorTypeFilter<$PrismaModel>
    _max?: NestedEnumMonitorTypeFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type MonitorScalarRelationFilter = {
    is?: MonitorWhereInput
    isNot?: MonitorWhereInput
  }

  export type CheckResultCountOrderByAggregateInput = {
    id?: SortOrder
    monitorId?: SortOrder
    status?: SortOrder
    responseTime?: SortOrder
    details?: SortOrder
    checkedAt?: SortOrder
  }

  export type CheckResultAvgOrderByAggregateInput = {
    responseTime?: SortOrder
  }

  export type CheckResultMaxOrderByAggregateInput = {
    id?: SortOrder
    monitorId?: SortOrder
    status?: SortOrder
    responseTime?: SortOrder
    checkedAt?: SortOrder
  }

  export type CheckResultMinOrderByAggregateInput = {
    id?: SortOrder
    monitorId?: SortOrder
    status?: SortOrder
    responseTime?: SortOrder
    checkedAt?: SortOrder
  }

  export type CheckResultSumOrderByAggregateInput = {
    responseTime?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type EnumNotificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeFilter<$PrismaModel> | $Enums.NotificationType
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    address?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    address?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    address?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumNotificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotificationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationTypeFilter<$PrismaModel>
    _max?: NestedEnumNotificationTypeFilter<$PrismaModel>
  }

  export type NotificationScalarRelationFilter = {
    is?: NotificationWhereInput
    isNot?: NotificationWhereInput
  }

  export type MonitorNullableScalarRelationFilter = {
    is?: MonitorWhereInput | null
    isNot?: MonitorWhereInput | null
  }

  export type NotificationSentCountOrderByAggregateInput = {
    id?: SortOrder
    notificationId?: SortOrder
    monitorId?: SortOrder
    sentAt?: SortOrder
    message?: SortOrder
  }

  export type NotificationSentMaxOrderByAggregateInput = {
    id?: SortOrder
    notificationId?: SortOrder
    monitorId?: SortOrder
    sentAt?: SortOrder
    message?: SortOrder
  }

  export type NotificationSentMinOrderByAggregateInput = {
    id?: SortOrder
    notificationId?: SortOrder
    monitorId?: SortOrder
    sentAt?: SortOrder
    message?: SortOrder
  }

  export type MonitorCreateNestedManyWithoutUserInput = {
    create?: XOR<MonitorCreateWithoutUserInput, MonitorUncheckedCreateWithoutUserInput> | MonitorCreateWithoutUserInput[] | MonitorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MonitorCreateOrConnectWithoutUserInput | MonitorCreateOrConnectWithoutUserInput[]
    createMany?: MonitorCreateManyUserInputEnvelope
    connect?: MonitorWhereUniqueInput | MonitorWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type MonitorUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MonitorCreateWithoutUserInput, MonitorUncheckedCreateWithoutUserInput> | MonitorCreateWithoutUserInput[] | MonitorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MonitorCreateOrConnectWithoutUserInput | MonitorCreateOrConnectWithoutUserInput[]
    createMany?: MonitorCreateManyUserInputEnvelope
    connect?: MonitorWhereUniqueInput | MonitorWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MonitorUpdateManyWithoutUserNestedInput = {
    create?: XOR<MonitorCreateWithoutUserInput, MonitorUncheckedCreateWithoutUserInput> | MonitorCreateWithoutUserInput[] | MonitorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MonitorCreateOrConnectWithoutUserInput | MonitorCreateOrConnectWithoutUserInput[]
    upsert?: MonitorUpsertWithWhereUniqueWithoutUserInput | MonitorUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MonitorCreateManyUserInputEnvelope
    set?: MonitorWhereUniqueInput | MonitorWhereUniqueInput[]
    disconnect?: MonitorWhereUniqueInput | MonitorWhereUniqueInput[]
    delete?: MonitorWhereUniqueInput | MonitorWhereUniqueInput[]
    connect?: MonitorWhereUniqueInput | MonitorWhereUniqueInput[]
    update?: MonitorUpdateWithWhereUniqueWithoutUserInput | MonitorUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MonitorUpdateManyWithWhereWithoutUserInput | MonitorUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MonitorScalarWhereInput | MonitorScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type MonitorUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MonitorCreateWithoutUserInput, MonitorUncheckedCreateWithoutUserInput> | MonitorCreateWithoutUserInput[] | MonitorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MonitorCreateOrConnectWithoutUserInput | MonitorCreateOrConnectWithoutUserInput[]
    upsert?: MonitorUpsertWithWhereUniqueWithoutUserInput | MonitorUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MonitorCreateManyUserInputEnvelope
    set?: MonitorWhereUniqueInput | MonitorWhereUniqueInput[]
    disconnect?: MonitorWhereUniqueInput | MonitorWhereUniqueInput[]
    delete?: MonitorWhereUniqueInput | MonitorWhereUniqueInput[]
    connect?: MonitorWhereUniqueInput | MonitorWhereUniqueInput[]
    update?: MonitorUpdateWithWhereUniqueWithoutUserInput | MonitorUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MonitorUpdateManyWithWhereWithoutUserInput | MonitorUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MonitorScalarWhereInput | MonitorScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutMonitorsInput = {
    create?: XOR<UserCreateWithoutMonitorsInput, UserUncheckedCreateWithoutMonitorsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMonitorsInput
    connect?: UserWhereUniqueInput
  }

  export type CheckResultCreateNestedManyWithoutMonitorInput = {
    create?: XOR<CheckResultCreateWithoutMonitorInput, CheckResultUncheckedCreateWithoutMonitorInput> | CheckResultCreateWithoutMonitorInput[] | CheckResultUncheckedCreateWithoutMonitorInput[]
    connectOrCreate?: CheckResultCreateOrConnectWithoutMonitorInput | CheckResultCreateOrConnectWithoutMonitorInput[]
    createMany?: CheckResultCreateManyMonitorInputEnvelope
    connect?: CheckResultWhereUniqueInput | CheckResultWhereUniqueInput[]
  }

  export type NotificationSentCreateNestedManyWithoutMonitorInput = {
    create?: XOR<NotificationSentCreateWithoutMonitorInput, NotificationSentUncheckedCreateWithoutMonitorInput> | NotificationSentCreateWithoutMonitorInput[] | NotificationSentUncheckedCreateWithoutMonitorInput[]
    connectOrCreate?: NotificationSentCreateOrConnectWithoutMonitorInput | NotificationSentCreateOrConnectWithoutMonitorInput[]
    createMany?: NotificationSentCreateManyMonitorInputEnvelope
    connect?: NotificationSentWhereUniqueInput | NotificationSentWhereUniqueInput[]
  }

  export type CheckResultUncheckedCreateNestedManyWithoutMonitorInput = {
    create?: XOR<CheckResultCreateWithoutMonitorInput, CheckResultUncheckedCreateWithoutMonitorInput> | CheckResultCreateWithoutMonitorInput[] | CheckResultUncheckedCreateWithoutMonitorInput[]
    connectOrCreate?: CheckResultCreateOrConnectWithoutMonitorInput | CheckResultCreateOrConnectWithoutMonitorInput[]
    createMany?: CheckResultCreateManyMonitorInputEnvelope
    connect?: CheckResultWhereUniqueInput | CheckResultWhereUniqueInput[]
  }

  export type NotificationSentUncheckedCreateNestedManyWithoutMonitorInput = {
    create?: XOR<NotificationSentCreateWithoutMonitorInput, NotificationSentUncheckedCreateWithoutMonitorInput> | NotificationSentCreateWithoutMonitorInput[] | NotificationSentUncheckedCreateWithoutMonitorInput[]
    connectOrCreate?: NotificationSentCreateOrConnectWithoutMonitorInput | NotificationSentCreateOrConnectWithoutMonitorInput[]
    createMany?: NotificationSentCreateManyMonitorInputEnvelope
    connect?: NotificationSentWhereUniqueInput | NotificationSentWhereUniqueInput[]
  }

  export type EnumMonitorTypeFieldUpdateOperationsInput = {
    set?: $Enums.MonitorType
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutMonitorsNestedInput = {
    create?: XOR<UserCreateWithoutMonitorsInput, UserUncheckedCreateWithoutMonitorsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMonitorsInput
    upsert?: UserUpsertWithoutMonitorsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMonitorsInput, UserUpdateWithoutMonitorsInput>, UserUncheckedUpdateWithoutMonitorsInput>
  }

  export type CheckResultUpdateManyWithoutMonitorNestedInput = {
    create?: XOR<CheckResultCreateWithoutMonitorInput, CheckResultUncheckedCreateWithoutMonitorInput> | CheckResultCreateWithoutMonitorInput[] | CheckResultUncheckedCreateWithoutMonitorInput[]
    connectOrCreate?: CheckResultCreateOrConnectWithoutMonitorInput | CheckResultCreateOrConnectWithoutMonitorInput[]
    upsert?: CheckResultUpsertWithWhereUniqueWithoutMonitorInput | CheckResultUpsertWithWhereUniqueWithoutMonitorInput[]
    createMany?: CheckResultCreateManyMonitorInputEnvelope
    set?: CheckResultWhereUniqueInput | CheckResultWhereUniqueInput[]
    disconnect?: CheckResultWhereUniqueInput | CheckResultWhereUniqueInput[]
    delete?: CheckResultWhereUniqueInput | CheckResultWhereUniqueInput[]
    connect?: CheckResultWhereUniqueInput | CheckResultWhereUniqueInput[]
    update?: CheckResultUpdateWithWhereUniqueWithoutMonitorInput | CheckResultUpdateWithWhereUniqueWithoutMonitorInput[]
    updateMany?: CheckResultUpdateManyWithWhereWithoutMonitorInput | CheckResultUpdateManyWithWhereWithoutMonitorInput[]
    deleteMany?: CheckResultScalarWhereInput | CheckResultScalarWhereInput[]
  }

  export type NotificationSentUpdateManyWithoutMonitorNestedInput = {
    create?: XOR<NotificationSentCreateWithoutMonitorInput, NotificationSentUncheckedCreateWithoutMonitorInput> | NotificationSentCreateWithoutMonitorInput[] | NotificationSentUncheckedCreateWithoutMonitorInput[]
    connectOrCreate?: NotificationSentCreateOrConnectWithoutMonitorInput | NotificationSentCreateOrConnectWithoutMonitorInput[]
    upsert?: NotificationSentUpsertWithWhereUniqueWithoutMonitorInput | NotificationSentUpsertWithWhereUniqueWithoutMonitorInput[]
    createMany?: NotificationSentCreateManyMonitorInputEnvelope
    set?: NotificationSentWhereUniqueInput | NotificationSentWhereUniqueInput[]
    disconnect?: NotificationSentWhereUniqueInput | NotificationSentWhereUniqueInput[]
    delete?: NotificationSentWhereUniqueInput | NotificationSentWhereUniqueInput[]
    connect?: NotificationSentWhereUniqueInput | NotificationSentWhereUniqueInput[]
    update?: NotificationSentUpdateWithWhereUniqueWithoutMonitorInput | NotificationSentUpdateWithWhereUniqueWithoutMonitorInput[]
    updateMany?: NotificationSentUpdateManyWithWhereWithoutMonitorInput | NotificationSentUpdateManyWithWhereWithoutMonitorInput[]
    deleteMany?: NotificationSentScalarWhereInput | NotificationSentScalarWhereInput[]
  }

  export type CheckResultUncheckedUpdateManyWithoutMonitorNestedInput = {
    create?: XOR<CheckResultCreateWithoutMonitorInput, CheckResultUncheckedCreateWithoutMonitorInput> | CheckResultCreateWithoutMonitorInput[] | CheckResultUncheckedCreateWithoutMonitorInput[]
    connectOrCreate?: CheckResultCreateOrConnectWithoutMonitorInput | CheckResultCreateOrConnectWithoutMonitorInput[]
    upsert?: CheckResultUpsertWithWhereUniqueWithoutMonitorInput | CheckResultUpsertWithWhereUniqueWithoutMonitorInput[]
    createMany?: CheckResultCreateManyMonitorInputEnvelope
    set?: CheckResultWhereUniqueInput | CheckResultWhereUniqueInput[]
    disconnect?: CheckResultWhereUniqueInput | CheckResultWhereUniqueInput[]
    delete?: CheckResultWhereUniqueInput | CheckResultWhereUniqueInput[]
    connect?: CheckResultWhereUniqueInput | CheckResultWhereUniqueInput[]
    update?: CheckResultUpdateWithWhereUniqueWithoutMonitorInput | CheckResultUpdateWithWhereUniqueWithoutMonitorInput[]
    updateMany?: CheckResultUpdateManyWithWhereWithoutMonitorInput | CheckResultUpdateManyWithWhereWithoutMonitorInput[]
    deleteMany?: CheckResultScalarWhereInput | CheckResultScalarWhereInput[]
  }

  export type NotificationSentUncheckedUpdateManyWithoutMonitorNestedInput = {
    create?: XOR<NotificationSentCreateWithoutMonitorInput, NotificationSentUncheckedCreateWithoutMonitorInput> | NotificationSentCreateWithoutMonitorInput[] | NotificationSentUncheckedCreateWithoutMonitorInput[]
    connectOrCreate?: NotificationSentCreateOrConnectWithoutMonitorInput | NotificationSentCreateOrConnectWithoutMonitorInput[]
    upsert?: NotificationSentUpsertWithWhereUniqueWithoutMonitorInput | NotificationSentUpsertWithWhereUniqueWithoutMonitorInput[]
    createMany?: NotificationSentCreateManyMonitorInputEnvelope
    set?: NotificationSentWhereUniqueInput | NotificationSentWhereUniqueInput[]
    disconnect?: NotificationSentWhereUniqueInput | NotificationSentWhereUniqueInput[]
    delete?: NotificationSentWhereUniqueInput | NotificationSentWhereUniqueInput[]
    connect?: NotificationSentWhereUniqueInput | NotificationSentWhereUniqueInput[]
    update?: NotificationSentUpdateWithWhereUniqueWithoutMonitorInput | NotificationSentUpdateWithWhereUniqueWithoutMonitorInput[]
    updateMany?: NotificationSentUpdateManyWithWhereWithoutMonitorInput | NotificationSentUpdateManyWithWhereWithoutMonitorInput[]
    deleteMany?: NotificationSentScalarWhereInput | NotificationSentScalarWhereInput[]
  }

  export type MonitorCreateNestedOneWithoutCheckResultsInput = {
    create?: XOR<MonitorCreateWithoutCheckResultsInput, MonitorUncheckedCreateWithoutCheckResultsInput>
    connectOrCreate?: MonitorCreateOrConnectWithoutCheckResultsInput
    connect?: MonitorWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MonitorUpdateOneRequiredWithoutCheckResultsNestedInput = {
    create?: XOR<MonitorCreateWithoutCheckResultsInput, MonitorUncheckedCreateWithoutCheckResultsInput>
    connectOrCreate?: MonitorCreateOrConnectWithoutCheckResultsInput
    upsert?: MonitorUpsertWithoutCheckResultsInput
    connect?: MonitorWhereUniqueInput
    update?: XOR<XOR<MonitorUpdateToOneWithWhereWithoutCheckResultsInput, MonitorUpdateWithoutCheckResultsInput>, MonitorUncheckedUpdateWithoutCheckResultsInput>
  }

  export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type NotificationSentCreateNestedManyWithoutNotificationInput = {
    create?: XOR<NotificationSentCreateWithoutNotificationInput, NotificationSentUncheckedCreateWithoutNotificationInput> | NotificationSentCreateWithoutNotificationInput[] | NotificationSentUncheckedCreateWithoutNotificationInput[]
    connectOrCreate?: NotificationSentCreateOrConnectWithoutNotificationInput | NotificationSentCreateOrConnectWithoutNotificationInput[]
    createMany?: NotificationSentCreateManyNotificationInputEnvelope
    connect?: NotificationSentWhereUniqueInput | NotificationSentWhereUniqueInput[]
  }

  export type NotificationSentUncheckedCreateNestedManyWithoutNotificationInput = {
    create?: XOR<NotificationSentCreateWithoutNotificationInput, NotificationSentUncheckedCreateWithoutNotificationInput> | NotificationSentCreateWithoutNotificationInput[] | NotificationSentUncheckedCreateWithoutNotificationInput[]
    connectOrCreate?: NotificationSentCreateOrConnectWithoutNotificationInput | NotificationSentCreateOrConnectWithoutNotificationInput[]
    createMany?: NotificationSentCreateManyNotificationInputEnvelope
    connect?: NotificationSentWhereUniqueInput | NotificationSentWhereUniqueInput[]
  }

  export type EnumNotificationTypeFieldUpdateOperationsInput = {
    set?: $Enums.NotificationType
  }

  export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    upsert?: UserUpsertWithoutNotificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationsInput, UserUpdateWithoutNotificationsInput>, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type NotificationSentUpdateManyWithoutNotificationNestedInput = {
    create?: XOR<NotificationSentCreateWithoutNotificationInput, NotificationSentUncheckedCreateWithoutNotificationInput> | NotificationSentCreateWithoutNotificationInput[] | NotificationSentUncheckedCreateWithoutNotificationInput[]
    connectOrCreate?: NotificationSentCreateOrConnectWithoutNotificationInput | NotificationSentCreateOrConnectWithoutNotificationInput[]
    upsert?: NotificationSentUpsertWithWhereUniqueWithoutNotificationInput | NotificationSentUpsertWithWhereUniqueWithoutNotificationInput[]
    createMany?: NotificationSentCreateManyNotificationInputEnvelope
    set?: NotificationSentWhereUniqueInput | NotificationSentWhereUniqueInput[]
    disconnect?: NotificationSentWhereUniqueInput | NotificationSentWhereUniqueInput[]
    delete?: NotificationSentWhereUniqueInput | NotificationSentWhereUniqueInput[]
    connect?: NotificationSentWhereUniqueInput | NotificationSentWhereUniqueInput[]
    update?: NotificationSentUpdateWithWhereUniqueWithoutNotificationInput | NotificationSentUpdateWithWhereUniqueWithoutNotificationInput[]
    updateMany?: NotificationSentUpdateManyWithWhereWithoutNotificationInput | NotificationSentUpdateManyWithWhereWithoutNotificationInput[]
    deleteMany?: NotificationSentScalarWhereInput | NotificationSentScalarWhereInput[]
  }

  export type NotificationSentUncheckedUpdateManyWithoutNotificationNestedInput = {
    create?: XOR<NotificationSentCreateWithoutNotificationInput, NotificationSentUncheckedCreateWithoutNotificationInput> | NotificationSentCreateWithoutNotificationInput[] | NotificationSentUncheckedCreateWithoutNotificationInput[]
    connectOrCreate?: NotificationSentCreateOrConnectWithoutNotificationInput | NotificationSentCreateOrConnectWithoutNotificationInput[]
    upsert?: NotificationSentUpsertWithWhereUniqueWithoutNotificationInput | NotificationSentUpsertWithWhereUniqueWithoutNotificationInput[]
    createMany?: NotificationSentCreateManyNotificationInputEnvelope
    set?: NotificationSentWhereUniqueInput | NotificationSentWhereUniqueInput[]
    disconnect?: NotificationSentWhereUniqueInput | NotificationSentWhereUniqueInput[]
    delete?: NotificationSentWhereUniqueInput | NotificationSentWhereUniqueInput[]
    connect?: NotificationSentWhereUniqueInput | NotificationSentWhereUniqueInput[]
    update?: NotificationSentUpdateWithWhereUniqueWithoutNotificationInput | NotificationSentUpdateWithWhereUniqueWithoutNotificationInput[]
    updateMany?: NotificationSentUpdateManyWithWhereWithoutNotificationInput | NotificationSentUpdateManyWithWhereWithoutNotificationInput[]
    deleteMany?: NotificationSentScalarWhereInput | NotificationSentScalarWhereInput[]
  }

  export type NotificationCreateNestedOneWithoutSentInput = {
    create?: XOR<NotificationCreateWithoutSentInput, NotificationUncheckedCreateWithoutSentInput>
    connectOrCreate?: NotificationCreateOrConnectWithoutSentInput
    connect?: NotificationWhereUniqueInput
  }

  export type MonitorCreateNestedOneWithoutNotificationSentsInput = {
    create?: XOR<MonitorCreateWithoutNotificationSentsInput, MonitorUncheckedCreateWithoutNotificationSentsInput>
    connectOrCreate?: MonitorCreateOrConnectWithoutNotificationSentsInput
    connect?: MonitorWhereUniqueInput
  }

  export type NotificationUpdateOneRequiredWithoutSentNestedInput = {
    create?: XOR<NotificationCreateWithoutSentInput, NotificationUncheckedCreateWithoutSentInput>
    connectOrCreate?: NotificationCreateOrConnectWithoutSentInput
    upsert?: NotificationUpsertWithoutSentInput
    connect?: NotificationWhereUniqueInput
    update?: XOR<XOR<NotificationUpdateToOneWithWhereWithoutSentInput, NotificationUpdateWithoutSentInput>, NotificationUncheckedUpdateWithoutSentInput>
  }

  export type MonitorUpdateOneWithoutNotificationSentsNestedInput = {
    create?: XOR<MonitorCreateWithoutNotificationSentsInput, MonitorUncheckedCreateWithoutNotificationSentsInput>
    connectOrCreate?: MonitorCreateOrConnectWithoutNotificationSentsInput
    upsert?: MonitorUpsertWithoutNotificationSentsInput
    disconnect?: MonitorWhereInput | boolean
    delete?: MonitorWhereInput | boolean
    connect?: MonitorWhereUniqueInput
    update?: XOR<XOR<MonitorUpdateToOneWithWhereWithoutNotificationSentsInput, MonitorUpdateWithoutNotificationSentsInput>, MonitorUncheckedUpdateWithoutNotificationSentsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumMonitorTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MonitorType | EnumMonitorTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MonitorType[] | ListEnumMonitorTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MonitorType[] | ListEnumMonitorTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMonitorTypeFilter<$PrismaModel> | $Enums.MonitorType
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumMonitorTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MonitorType | EnumMonitorTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MonitorType[] | ListEnumMonitorTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MonitorType[] | ListEnumMonitorTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMonitorTypeWithAggregatesFilter<$PrismaModel> | $Enums.MonitorType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMonitorTypeFilter<$PrismaModel>
    _max?: NestedEnumMonitorTypeFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumNotificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeFilter<$PrismaModel> | $Enums.NotificationType
  }

  export type NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotificationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationTypeFilter<$PrismaModel>
    _max?: NestedEnumNotificationTypeFilter<$PrismaModel>
  }

  export type MonitorCreateWithoutUserInput = {
    id?: string
    name: string
    type: $Enums.MonitorType
    config: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    checkInterval: number
    createdAt?: Date | string
    updatedAt?: Date | string
    checkResults?: CheckResultCreateNestedManyWithoutMonitorInput
    notificationSents?: NotificationSentCreateNestedManyWithoutMonitorInput
  }

  export type MonitorUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    type: $Enums.MonitorType
    config: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    checkInterval: number
    createdAt?: Date | string
    updatedAt?: Date | string
    checkResults?: CheckResultUncheckedCreateNestedManyWithoutMonitorInput
    notificationSents?: NotificationSentUncheckedCreateNestedManyWithoutMonitorInput
  }

  export type MonitorCreateOrConnectWithoutUserInput = {
    where: MonitorWhereUniqueInput
    create: XOR<MonitorCreateWithoutUserInput, MonitorUncheckedCreateWithoutUserInput>
  }

  export type MonitorCreateManyUserInputEnvelope = {
    data: MonitorCreateManyUserInput | MonitorCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutUserInput = {
    id?: string
    type: $Enums.NotificationType
    address: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    sent?: NotificationSentCreateNestedManyWithoutNotificationInput
  }

  export type NotificationUncheckedCreateWithoutUserInput = {
    id?: string
    type: $Enums.NotificationType
    address: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    sent?: NotificationSentUncheckedCreateNestedManyWithoutNotificationInput
  }

  export type NotificationCreateOrConnectWithoutUserInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationCreateManyUserInputEnvelope = {
    data: NotificationCreateManyUserInput | NotificationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MonitorUpsertWithWhereUniqueWithoutUserInput = {
    where: MonitorWhereUniqueInput
    update: XOR<MonitorUpdateWithoutUserInput, MonitorUncheckedUpdateWithoutUserInput>
    create: XOR<MonitorCreateWithoutUserInput, MonitorUncheckedCreateWithoutUserInput>
  }

  export type MonitorUpdateWithWhereUniqueWithoutUserInput = {
    where: MonitorWhereUniqueInput
    data: XOR<MonitorUpdateWithoutUserInput, MonitorUncheckedUpdateWithoutUserInput>
  }

  export type MonitorUpdateManyWithWhereWithoutUserInput = {
    where: MonitorScalarWhereInput
    data: XOR<MonitorUpdateManyMutationInput, MonitorUncheckedUpdateManyWithoutUserInput>
  }

  export type MonitorScalarWhereInput = {
    AND?: MonitorScalarWhereInput | MonitorScalarWhereInput[]
    OR?: MonitorScalarWhereInput[]
    NOT?: MonitorScalarWhereInput | MonitorScalarWhereInput[]
    id?: StringFilter<"Monitor"> | string
    userId?: StringFilter<"Monitor"> | string
    name?: StringFilter<"Monitor"> | string
    type?: EnumMonitorTypeFilter<"Monitor"> | $Enums.MonitorType
    config?: JsonFilter<"Monitor">
    isActive?: BoolFilter<"Monitor"> | boolean
    checkInterval?: IntFilter<"Monitor"> | number
    createdAt?: DateTimeFilter<"Monitor"> | Date | string
    updatedAt?: DateTimeFilter<"Monitor"> | Date | string
  }

  export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
  }

  export type NotificationUpdateManyWithWhereWithoutUserInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: StringFilter<"Notification"> | string
    userId?: StringFilter<"Notification"> | string
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    address?: StringFilter<"Notification"> | string
    isActive?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    updatedAt?: DateTimeFilter<"Notification"> | Date | string
  }

  export type UserCreateWithoutMonitorsInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMonitorsInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMonitorsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMonitorsInput, UserUncheckedCreateWithoutMonitorsInput>
  }

  export type CheckResultCreateWithoutMonitorInput = {
    id?: string
    status: string
    responseTime?: number | null
    details?: NullableJsonNullValueInput | InputJsonValue
    checkedAt?: Date | string
  }

  export type CheckResultUncheckedCreateWithoutMonitorInput = {
    id?: string
    status: string
    responseTime?: number | null
    details?: NullableJsonNullValueInput | InputJsonValue
    checkedAt?: Date | string
  }

  export type CheckResultCreateOrConnectWithoutMonitorInput = {
    where: CheckResultWhereUniqueInput
    create: XOR<CheckResultCreateWithoutMonitorInput, CheckResultUncheckedCreateWithoutMonitorInput>
  }

  export type CheckResultCreateManyMonitorInputEnvelope = {
    data: CheckResultCreateManyMonitorInput | CheckResultCreateManyMonitorInput[]
    skipDuplicates?: boolean
  }

  export type NotificationSentCreateWithoutMonitorInput = {
    id?: string
    sentAt?: Date | string
    message: string
    notification: NotificationCreateNestedOneWithoutSentInput
  }

  export type NotificationSentUncheckedCreateWithoutMonitorInput = {
    id?: string
    notificationId: string
    sentAt?: Date | string
    message: string
  }

  export type NotificationSentCreateOrConnectWithoutMonitorInput = {
    where: NotificationSentWhereUniqueInput
    create: XOR<NotificationSentCreateWithoutMonitorInput, NotificationSentUncheckedCreateWithoutMonitorInput>
  }

  export type NotificationSentCreateManyMonitorInputEnvelope = {
    data: NotificationSentCreateManyMonitorInput | NotificationSentCreateManyMonitorInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutMonitorsInput = {
    update: XOR<UserUpdateWithoutMonitorsInput, UserUncheckedUpdateWithoutMonitorsInput>
    create: XOR<UserCreateWithoutMonitorsInput, UserUncheckedCreateWithoutMonitorsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMonitorsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMonitorsInput, UserUncheckedUpdateWithoutMonitorsInput>
  }

  export type UserUpdateWithoutMonitorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMonitorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CheckResultUpsertWithWhereUniqueWithoutMonitorInput = {
    where: CheckResultWhereUniqueInput
    update: XOR<CheckResultUpdateWithoutMonitorInput, CheckResultUncheckedUpdateWithoutMonitorInput>
    create: XOR<CheckResultCreateWithoutMonitorInput, CheckResultUncheckedCreateWithoutMonitorInput>
  }

  export type CheckResultUpdateWithWhereUniqueWithoutMonitorInput = {
    where: CheckResultWhereUniqueInput
    data: XOR<CheckResultUpdateWithoutMonitorInput, CheckResultUncheckedUpdateWithoutMonitorInput>
  }

  export type CheckResultUpdateManyWithWhereWithoutMonitorInput = {
    where: CheckResultScalarWhereInput
    data: XOR<CheckResultUpdateManyMutationInput, CheckResultUncheckedUpdateManyWithoutMonitorInput>
  }

  export type CheckResultScalarWhereInput = {
    AND?: CheckResultScalarWhereInput | CheckResultScalarWhereInput[]
    OR?: CheckResultScalarWhereInput[]
    NOT?: CheckResultScalarWhereInput | CheckResultScalarWhereInput[]
    id?: StringFilter<"CheckResult"> | string
    monitorId?: StringFilter<"CheckResult"> | string
    status?: StringFilter<"CheckResult"> | string
    responseTime?: IntNullableFilter<"CheckResult"> | number | null
    details?: JsonNullableFilter<"CheckResult">
    checkedAt?: DateTimeFilter<"CheckResult"> | Date | string
  }

  export type NotificationSentUpsertWithWhereUniqueWithoutMonitorInput = {
    where: NotificationSentWhereUniqueInput
    update: XOR<NotificationSentUpdateWithoutMonitorInput, NotificationSentUncheckedUpdateWithoutMonitorInput>
    create: XOR<NotificationSentCreateWithoutMonitorInput, NotificationSentUncheckedCreateWithoutMonitorInput>
  }

  export type NotificationSentUpdateWithWhereUniqueWithoutMonitorInput = {
    where: NotificationSentWhereUniqueInput
    data: XOR<NotificationSentUpdateWithoutMonitorInput, NotificationSentUncheckedUpdateWithoutMonitorInput>
  }

  export type NotificationSentUpdateManyWithWhereWithoutMonitorInput = {
    where: NotificationSentScalarWhereInput
    data: XOR<NotificationSentUpdateManyMutationInput, NotificationSentUncheckedUpdateManyWithoutMonitorInput>
  }

  export type NotificationSentScalarWhereInput = {
    AND?: NotificationSentScalarWhereInput | NotificationSentScalarWhereInput[]
    OR?: NotificationSentScalarWhereInput[]
    NOT?: NotificationSentScalarWhereInput | NotificationSentScalarWhereInput[]
    id?: StringFilter<"NotificationSent"> | string
    notificationId?: StringFilter<"NotificationSent"> | string
    monitorId?: StringNullableFilter<"NotificationSent"> | string | null
    sentAt?: DateTimeFilter<"NotificationSent"> | Date | string
    message?: StringFilter<"NotificationSent"> | string
  }

  export type MonitorCreateWithoutCheckResultsInput = {
    id?: string
    name: string
    type: $Enums.MonitorType
    config: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    checkInterval: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutMonitorsInput
    notificationSents?: NotificationSentCreateNestedManyWithoutMonitorInput
  }

  export type MonitorUncheckedCreateWithoutCheckResultsInput = {
    id?: string
    userId: string
    name: string
    type: $Enums.MonitorType
    config: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    checkInterval: number
    createdAt?: Date | string
    updatedAt?: Date | string
    notificationSents?: NotificationSentUncheckedCreateNestedManyWithoutMonitorInput
  }

  export type MonitorCreateOrConnectWithoutCheckResultsInput = {
    where: MonitorWhereUniqueInput
    create: XOR<MonitorCreateWithoutCheckResultsInput, MonitorUncheckedCreateWithoutCheckResultsInput>
  }

  export type MonitorUpsertWithoutCheckResultsInput = {
    update: XOR<MonitorUpdateWithoutCheckResultsInput, MonitorUncheckedUpdateWithoutCheckResultsInput>
    create: XOR<MonitorCreateWithoutCheckResultsInput, MonitorUncheckedCreateWithoutCheckResultsInput>
    where?: MonitorWhereInput
  }

  export type MonitorUpdateToOneWithWhereWithoutCheckResultsInput = {
    where?: MonitorWhereInput
    data: XOR<MonitorUpdateWithoutCheckResultsInput, MonitorUncheckedUpdateWithoutCheckResultsInput>
  }

  export type MonitorUpdateWithoutCheckResultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumMonitorTypeFieldUpdateOperationsInput | $Enums.MonitorType
    config?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    checkInterval?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMonitorsNestedInput
    notificationSents?: NotificationSentUpdateManyWithoutMonitorNestedInput
  }

  export type MonitorUncheckedUpdateWithoutCheckResultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumMonitorTypeFieldUpdateOperationsInput | $Enums.MonitorType
    config?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    checkInterval?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notificationSents?: NotificationSentUncheckedUpdateManyWithoutMonitorNestedInput
  }

  export type UserCreateWithoutNotificationsInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    monitors?: MonitorCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    monitors?: MonitorUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
  }

  export type NotificationSentCreateWithoutNotificationInput = {
    id?: string
    sentAt?: Date | string
    message: string
    monitor?: MonitorCreateNestedOneWithoutNotificationSentsInput
  }

  export type NotificationSentUncheckedCreateWithoutNotificationInput = {
    id?: string
    monitorId?: string | null
    sentAt?: Date | string
    message: string
  }

  export type NotificationSentCreateOrConnectWithoutNotificationInput = {
    where: NotificationSentWhereUniqueInput
    create: XOR<NotificationSentCreateWithoutNotificationInput, NotificationSentUncheckedCreateWithoutNotificationInput>
  }

  export type NotificationSentCreateManyNotificationInputEnvelope = {
    data: NotificationSentCreateManyNotificationInput | NotificationSentCreateManyNotificationInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutNotificationsInput = {
    update: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    monitors?: MonitorUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    monitors?: MonitorUncheckedUpdateManyWithoutUserNestedInput
  }

  export type NotificationSentUpsertWithWhereUniqueWithoutNotificationInput = {
    where: NotificationSentWhereUniqueInput
    update: XOR<NotificationSentUpdateWithoutNotificationInput, NotificationSentUncheckedUpdateWithoutNotificationInput>
    create: XOR<NotificationSentCreateWithoutNotificationInput, NotificationSentUncheckedCreateWithoutNotificationInput>
  }

  export type NotificationSentUpdateWithWhereUniqueWithoutNotificationInput = {
    where: NotificationSentWhereUniqueInput
    data: XOR<NotificationSentUpdateWithoutNotificationInput, NotificationSentUncheckedUpdateWithoutNotificationInput>
  }

  export type NotificationSentUpdateManyWithWhereWithoutNotificationInput = {
    where: NotificationSentScalarWhereInput
    data: XOR<NotificationSentUpdateManyMutationInput, NotificationSentUncheckedUpdateManyWithoutNotificationInput>
  }

  export type NotificationCreateWithoutSentInput = {
    id?: string
    type: $Enums.NotificationType
    address: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateWithoutSentInput = {
    id?: string
    userId: string
    type: $Enums.NotificationType
    address: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationCreateOrConnectWithoutSentInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutSentInput, NotificationUncheckedCreateWithoutSentInput>
  }

  export type MonitorCreateWithoutNotificationSentsInput = {
    id?: string
    name: string
    type: $Enums.MonitorType
    config: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    checkInterval: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutMonitorsInput
    checkResults?: CheckResultCreateNestedManyWithoutMonitorInput
  }

  export type MonitorUncheckedCreateWithoutNotificationSentsInput = {
    id?: string
    userId: string
    name: string
    type: $Enums.MonitorType
    config: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    checkInterval: number
    createdAt?: Date | string
    updatedAt?: Date | string
    checkResults?: CheckResultUncheckedCreateNestedManyWithoutMonitorInput
  }

  export type MonitorCreateOrConnectWithoutNotificationSentsInput = {
    where: MonitorWhereUniqueInput
    create: XOR<MonitorCreateWithoutNotificationSentsInput, MonitorUncheckedCreateWithoutNotificationSentsInput>
  }

  export type NotificationUpsertWithoutSentInput = {
    update: XOR<NotificationUpdateWithoutSentInput, NotificationUncheckedUpdateWithoutSentInput>
    create: XOR<NotificationCreateWithoutSentInput, NotificationUncheckedCreateWithoutSentInput>
    where?: NotificationWhereInput
  }

  export type NotificationUpdateToOneWithWhereWithoutSentInput = {
    where?: NotificationWhereInput
    data: XOR<NotificationUpdateWithoutSentInput, NotificationUncheckedUpdateWithoutSentInput>
  }

  export type NotificationUpdateWithoutSentInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    address?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateWithoutSentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    address?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonitorUpsertWithoutNotificationSentsInput = {
    update: XOR<MonitorUpdateWithoutNotificationSentsInput, MonitorUncheckedUpdateWithoutNotificationSentsInput>
    create: XOR<MonitorCreateWithoutNotificationSentsInput, MonitorUncheckedCreateWithoutNotificationSentsInput>
    where?: MonitorWhereInput
  }

  export type MonitorUpdateToOneWithWhereWithoutNotificationSentsInput = {
    where?: MonitorWhereInput
    data: XOR<MonitorUpdateWithoutNotificationSentsInput, MonitorUncheckedUpdateWithoutNotificationSentsInput>
  }

  export type MonitorUpdateWithoutNotificationSentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumMonitorTypeFieldUpdateOperationsInput | $Enums.MonitorType
    config?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    checkInterval?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMonitorsNestedInput
    checkResults?: CheckResultUpdateManyWithoutMonitorNestedInput
  }

  export type MonitorUncheckedUpdateWithoutNotificationSentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumMonitorTypeFieldUpdateOperationsInput | $Enums.MonitorType
    config?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    checkInterval?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkResults?: CheckResultUncheckedUpdateManyWithoutMonitorNestedInput
  }

  export type MonitorCreateManyUserInput = {
    id?: string
    name: string
    type: $Enums.MonitorType
    config: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    checkInterval: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationCreateManyUserInput = {
    id?: string
    type: $Enums.NotificationType
    address: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MonitorUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumMonitorTypeFieldUpdateOperationsInput | $Enums.MonitorType
    config?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    checkInterval?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkResults?: CheckResultUpdateManyWithoutMonitorNestedInput
    notificationSents?: NotificationSentUpdateManyWithoutMonitorNestedInput
  }

  export type MonitorUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumMonitorTypeFieldUpdateOperationsInput | $Enums.MonitorType
    config?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    checkInterval?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkResults?: CheckResultUncheckedUpdateManyWithoutMonitorNestedInput
    notificationSents?: NotificationSentUncheckedUpdateManyWithoutMonitorNestedInput
  }

  export type MonitorUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumMonitorTypeFieldUpdateOperationsInput | $Enums.MonitorType
    config?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    checkInterval?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    address?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sent?: NotificationSentUpdateManyWithoutNotificationNestedInput
  }

  export type NotificationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    address?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sent?: NotificationSentUncheckedUpdateManyWithoutNotificationNestedInput
  }

  export type NotificationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    address?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckResultCreateManyMonitorInput = {
    id?: string
    status: string
    responseTime?: number | null
    details?: NullableJsonNullValueInput | InputJsonValue
    checkedAt?: Date | string
  }

  export type NotificationSentCreateManyMonitorInput = {
    id?: string
    notificationId: string
    sentAt?: Date | string
    message: string
  }

  export type CheckResultUpdateWithoutMonitorInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    responseTime?: NullableIntFieldUpdateOperationsInput | number | null
    details?: NullableJsonNullValueInput | InputJsonValue
    checkedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckResultUncheckedUpdateWithoutMonitorInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    responseTime?: NullableIntFieldUpdateOperationsInput | number | null
    details?: NullableJsonNullValueInput | InputJsonValue
    checkedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckResultUncheckedUpdateManyWithoutMonitorInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    responseTime?: NullableIntFieldUpdateOperationsInput | number | null
    details?: NullableJsonNullValueInput | InputJsonValue
    checkedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationSentUpdateWithoutMonitorInput = {
    id?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: StringFieldUpdateOperationsInput | string
    notification?: NotificationUpdateOneRequiredWithoutSentNestedInput
  }

  export type NotificationSentUncheckedUpdateWithoutMonitorInput = {
    id?: StringFieldUpdateOperationsInput | string
    notificationId?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationSentUncheckedUpdateManyWithoutMonitorInput = {
    id?: StringFieldUpdateOperationsInput | string
    notificationId?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationSentCreateManyNotificationInput = {
    id?: string
    monitorId?: string | null
    sentAt?: Date | string
    message: string
  }

  export type NotificationSentUpdateWithoutNotificationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: StringFieldUpdateOperationsInput | string
    monitor?: MonitorUpdateOneWithoutNotificationSentsNestedInput
  }

  export type NotificationSentUncheckedUpdateWithoutNotificationInput = {
    id?: StringFieldUpdateOperationsInput | string
    monitorId?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationSentUncheckedUpdateManyWithoutNotificationInput = {
    id?: StringFieldUpdateOperationsInput | string
    monitorId?: NullableStringFieldUpdateOperationsInput | string | null
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}