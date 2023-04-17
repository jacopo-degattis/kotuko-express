# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.1]

### Added
- Add axios as HTTP library
- Added guardian service to act as a wrapper for the Guardian API
- Added 'section' parameter to guardian routing.
- Added model to describe guardian sections' API response

### Fixed
- Fix .env file not loading globally using the `-r dotenv/config` value inside script

### Changed
- Improve guardian routing with try/catch to properly handle errors

## [1.0.0]

### Added

- Typescript & express/node types
- Script to build, launch and test program in local environment
- .env.template file with necessary environment variables