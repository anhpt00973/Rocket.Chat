import { Box } from '@rocket.chat/fuselage';
import { useSetting, useTranslation } from '@rocket.chat/ui-contexts';
import type { ReactElement } from 'react';
import React from 'react';

import { Page, PageHeader, PageScrollableContentWithShadow } from '../../../components/Page';
import RawText from '../../../components/RawText';
import TextCopy from '../../../components/TextCopy';
import Wrapper from './Wrapper';

// TODO: use `CodeSnippet` Component
const Installation = (): ReactElement => {
	const t = useTranslation();
	const setting = useSetting('Site_Url') as string;
	const siteUrl = setting?.replace(/\/$/, '');

	const installString = `<!-- Start of Star Media's workplace Livechat Script -->
	<script type="text/javascript">
	(function(w, d, s, u) {
		w.RocketChat = function(c) { w.RocketChat._.push(c) }; w.RocketChat._ = []; w.RocketChat.url = u;
		var h = d.getElementsByTagName(s)[0], j = d.createElement(s);
		j.async = true; j.src = '${siteUrl}/livechat/rocketchat-livechat.min.js?_=201903270000';
		h.parentNode.insertBefore(j, h);
	})(window, document, 'script', '${siteUrl}/livechat');
	</script>`;

	return (
		<Page>
			<PageHeader title={t('Installation')} />
			<PageScrollableContentWithShadow>
				<Box maxWidth='x600' alignSelf='center'>
					<p>
						<RawText>
							{t('To_install_RocketChat_Livechat_in_your_website_copy_paste_this_code_above_the_last_body_tag_on_your_site')}
						</RawText>
					</p>
					<TextCopy pi='none' text={installString} wrapper={Wrapper} />
				</Box>
			</PageScrollableContentWithShadow>
		</Page>
	);
};

export default Installation;
