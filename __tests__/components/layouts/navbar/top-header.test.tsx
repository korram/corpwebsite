import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { TopHeader } from '@/components/layouts/navbar/TopHeader';
import { useCurrentLocale } from '@/hooks/useI18n';
import { useChangeLocale } from '@/hooks/useI18nClient';
import '@testing-library/jest-dom';
import { IntlProvider } from 'next-intl';
import enMessages from '@/messages/en.json';

const changeLocaleMock = jest.fn();
const useChangeLocaleMock = () => {
  return { changeLocale: changeLocaleMock, isPending: false };
};

jest.mock('@/hooks/useI18n');
jest.mock('@/hooks/useI18nClient', () => ({
  useChangeLocale: useChangeLocaleMock,
}));

describe('TopHeader component', () => {
  it('renders the language dropdown', async () => {
    (useCurrentLocale as jest.Mock).mockImplementation(() => 'en');
    const { getByText } = render(<TopHeader />);
    expect(getByText('AXA ACADEMY - en')).toBeInTheDocument();
  });

  // it('calls the changeLocale function when the language is changed', async () => {
  //   const changeLocale = jest.fn();
  //   (useChangeLocale as jest.Mock).mockReturnValue({ changeLocale });
  //   (useCurrentLocale as jest.Mock).mockImplementation(() => 'en');
  //   const { getByText } = render(<TopHeader />);
  //   const languageButton = getByText('AXA ACADEMY - en');
  //   fireEvent.click(languageButton);
  //   await waitFor(() => expect(changeLocale).toHaveBeenCalledTimes(1));
  // });
});