import InkSelectInput from 'ink-select-input';
import type { Item } from 'ink-select-input/build/SelectInput';
import open from 'open';
import React, { FC } from 'react';
import stringWidth from 'string-width';

const SelectInput: typeof InkSelectInput = (InkSelectInput as any).default;

type LinkItem = Item<{ url?: string; action?(): void }>;

const handleSelect = (item: LinkItem) => {
  if (item.value.url) {
    open(item.value.url);
  }

  if (item.value.action) {
    item.value.action();
  }
};

const createItems = (
  items: (Omit<LinkItem, 'value'> & LinkItem['value'] & { icon?: string })[],
  {
    iconWidth = Math.max(
      ...items.map(item => (item.icon ? stringWidth(item.icon) : 0)),
    ),
    separator = '  ',
  } = {},
): LinkItem[] =>
  items.map(({ url, action, icon = '', ...item }) => ({
    key: url ?? item.label,
    ...item,
    label: `${icon}${''.padEnd(iconWidth - stringWidth(icon))}${separator}${
      item.label
    }`,
    value: { url, action },
  }));

const items = createItems([
  {
    icon: '🖥',
    label: 'Website',
    url: 'https://jan.buschtoens.me',
  },
  {
    icon: '💬',
    label: 'Twitter: @buschtoens',
    url: 'https://twitter.com/buschtoens',
  },
  {
    icon: '👨🏼‍💻',
    label: 'GitHub: @buschtoens',
    url: 'https://github.com/buschtoens',
  },
  {
    icon: '🏞',
    label: 'Instagram: @buschtoens',
    url: 'https://instagram.com/buschtoens',
  },
  {
    icon: '🎙',
    label: 'Podcast: The Ember Report 🐹',
    url: 'https://twitter.com/EmberReport',
  },
  {
    icon: '💼',
    label: 'Work: Software Architect at CLARK',
    url: 'https://github.com/ClarkSource',
  },
  // TODO: Add separator item here when https://github.com/vadimdemedes/ink-select-input/issues/4 is done
  {
    label: '---------',
  },
  {
    icon: '🔚',
    label: 'Quit',
    action() {
      // eslint-disable-next-line no-process-exit
      process.exit();
    },
  },
]);

export const Links: FC = () => (
  <SelectInput items={items} onSelect={handleSelect} />
);
