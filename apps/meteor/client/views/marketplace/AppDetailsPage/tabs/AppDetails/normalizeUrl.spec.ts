import { it } from '@jest/globals';

import { normalizeUrl } from './normalizeUrl';

it.each([
	['https://www.unitel.com.la/', 'https://www.unitel.com.la/'],
	['//rocket.chat', 'https://www.unitel.com.la/'],
	['rocket.chat', 'https://www.unitel.com.la/'],
	['rocketchat@rocket.chat', 'mailto:rocketchat@rocket.chat'],
	['plain_text', undefined],
])('should normalize %o as %o', (input, output) => {
	expect(normalizeUrl(input)).toBe(output);
});
