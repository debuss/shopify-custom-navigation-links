/**
 * @author debuss-a
 */

import React, {useState, useCallback} from 'react';
import {
    Layout,
    AccountConnection,
    Link
} from '@shopify/polaris';
import { useTranslation } from 'react-i18next';

function Configuration() {
    const [t] = useTranslation();
    const [connected, setConnected] = useState(false);
    const accountName = connected ? 'Jane Appleseed' : '';

    const handleAction = useCallback(() => {
        setConnected((connected) => !connected);
    }, []);

    const buttonText = connected ? t('Disconnect') : t('Connect');
    const details = connected ? t('Account connected') : t('No account connected');
    const terms = connected ? null : (
        <p>
            {t('By clicking')} <strong>{t('Connect')}</strong>, {t('you agree to accept Sample App\'s')} <Link url="#">
            {t('terms and conditions')}</Link>. {t('You\'ll pay a commission rate of 15% on sales made through Sample App')}.
        </p>
    );

    return (
        <React.Fragment>
            <Layout>
                <Layout.AnnotatedSection
                    title={t('Account')}
                    description={<span>
                        {t('Connect to your account via the AccountConnection component.')} <Link
                        url="https://polaris.shopify.com/components/actions/account-connection"
                        external
                    >{t('More information in the official documentation.')}</Link>
                    </span>}
                >
                    <AccountConnection
                        accountName={accountName}
                        connected={connected}
                        title={t('Example App')}
                        action={{
                            content: buttonText,
                            onAction: handleAction,
                        }}
                        details={details}
                        termsOfService={terms}
                    />
                </Layout.AnnotatedSection>
            </Layout>
        </React.Fragment>
    );
}

export default Configuration;
