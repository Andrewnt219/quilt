# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

<!-- ## Unreleased -->

## 1.1.6 - 2021-09-24

### Changed

- Migrate from `sewing-kit-next` to `loom` for building - package build output remains identical. [[#2039](https://github.com/Shopify/quilt/pull/2039)]

## 1.1.5 - 2021-08-30

### Changed

- Enable type checking in tests and fix type errors. [[#2011](https://github.com/Shopify/quilt/pull/2014)]

## 1.1.4 - 2021-08-24

### Changed

- Added file exclusion for tests to package.json. [[#2005](https://github.com/Shopify/quilt/pull/2005)]

## 1.1.3 - 2021-08-13

### Changed

- Updated build tooling, types are now compiled with TypeScript 4.3. [[#1997](https://github.com/Shopify/quilt/pull/1997)]

## 1.1.2 - 2021-08-04

### Changed

- Ensure `tsconfig.tsbuildinfo` file is not uploaded to the npm registry. [[#1982](https://github.com/Shopify/quilt/pull/1982)]

## 1.1.1 - 2021-08-03

### Changed

- Update to latest sewing-kit-next for build. Update `types`/`typesVersions` fields to point directly into the build folder [[#1980](https://github.com/Shopify/quilt/pull/1980)]

## 1.1.0 - 2021-07-13

### Added

- Officially supports React `17.x` [1969](https://github.com/Shopify/quilt/pull/1969/files)

## 1.0.2 - 2021-06-22

- No updates. Transitive dependency bump.

## 1.0.0 - 2021-05-21

### Breaking Change

- Update minimum supported node version to 12.14.0. Add engines field to help enforce usage of this version. [#1906](https://github.com/Shopify/quilt/pull/1906)

## 0.12.5 - 2021-04-22

- [Patch] Remove TypeScript type from distributed mjs [#1845](https://github.com/Shopify/quilt/pull/1845)

## 0.12.4 - 2021-04-13

### Changed

- Removed dependency on tslib, as we no-longer compile with `tsc`. [#1829](https://github.com/Shopify/quilt/pull/1829)

## 0.12.2 - 2021-03-03

### Fixed

- Updated multi-build outputs to include mandatory extensions to fix "Module not found" issues reported by ESM supported bundlers [#1759](https://github.com/Shopify/quilt/pull/1759)

## 0.12.0 - 2020-12-18

### Added

- Add new build outputs (CommonJS, ESM, esnext, Node) for greater tree-shakability [#1698](https://github.com/Shopify/quilt/pull/1698)
- Updated `fast-deep-equal` dependency to `^3.1.3` [#1710](https://github.com/Shopify/quilt/pull/1710)

## 0.11.28 - 2020-10-23

### Fixed

- Export `StringMapper` interface [#1655](https://github.com/Shopify/quilt/pull/1655)

## 0.11.27 - 2020-10-20

- Updated `tslib` dependency to `^1.14.1`. [#1657](https://github.com/Shopify/quilt/pull/1657)

## 0.11.11 - 2019-10-01

### Added

- new `asChoiceField` utility function to support `Checkbox` and `RadioButton` [#1070](https://github.com/Shopify/quilt/pull/1070)

## 0.11.8 - 2019-08-29

### Fixed

- Fixed using multiple layers deep of nested `<List />` inside of `<List />`

## 0.11.3

### Added

- Extend the return type of the submit handler for `FormState` component to accept a promise of both `void` and `RemoteError[]`. [#736](https://github.com/Shopify/quilt/pull/736)

## 0.11.2 - 2019-05-22

### Fixed

- validator signatures produced by `validate()` no longer require a `fields` param. [#714](https://github.com/Shopify/quilt/pull/714)

## 0.11.1 - 2019-05-15

### Fixed

- `FormState.Nested` no longer breaks when used in a `FormState.List` and an item is added [#698](https://github.com/Shopify/quilt/pull/698)

## 0.10.0

### Changed

- when `validateOnSubmit` is enabled, validation errors are surfaced on the form's `errors`. [#601](https://github.com/Shopify/quilt/pull/601)

## 0.9.1

### Changed

- `isNumeric` function ReGex now matches for negative numbers. This impacts users of `isNumericString` validator function relying on its previous behaviour of only allowing positive numbers. To reintroduce that behaviour please use `isPostiveNumericString`

## 0.9.0

### Removed

- `<Nested />` and `<List />`: removed logic in `shouldComponentUpdate()` limiting updates

## 0.8.0

### Added

- You can now provide `externalErrors` to the `FormState` component to be merged into the form's `error` objects.

### Changed

- lodash is no longer used internally. [#475](https://github.com/Shopify/quilt/pull/475)

### Fixed

- Fixes validators for cases where `externalErrors` are not provided. [#504](https://github.com/Shopify/quilt/pull/504)

## 0.7.0

### Added

- You can now use the onInitialValueChanged prop with fields having nested properties. [#464](https://github.com/Shopify/quilt/pull/464)

### Fixed

- `submit` now checks for the existence of `preventDefault` on the event passed in before calling it. [#465](https://github.com/Shopify/quilt/pull/465)

## 0.6.0

### Added

- You can control how `<FormState />` reacts to changes in the initialValue prop using onInitialValueChanged.

## 0.5.0

### Added

- `<List />` supports `getChildKey` to provide custom `key`s for it's children. [#387](https://github.com/Shopify/quilt/pull/387)

## 0.4.1

### Fixed

- `<List />` no longer breaks on name generation.

## 0.4.0

### Added

- The `validateRequired` helper can be used to generate validators that run even on empty input.

## 0.3.3

### Fixed

- Validators that depend on `FieldState` have more robust typing.

## 0.3.2

### Fixed

- When validators fail during a submit submitting is reset to false.

## 0.3.0

### Added

- The `validateOnSubmit` prop can be used to have validators run before the `onSubmit` function is called and will prevent `onSubmit` from being called if any fail.

## 0.2.10

### Fixed

- Fixed using multiple layers deep of Nested and List breaking the state.

## 0.2.9

### Fixed

- No longer accidentally import all of lodash.

## 0.2.8

### Changed

- Validators based on `validate` now always succeed for an empty input. The `required` and `requiredString` validators continue to behave the same way they used to.

### Fixed

- Fixed Nested and List component race condition. Nested and List now pass a function to their `onChange` prop instead of an object so that the data object will be created within `setState`.
