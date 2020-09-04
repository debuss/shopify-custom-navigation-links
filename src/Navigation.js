/**
 * @author debuss-a
 */

import React, {useState, useCallback} from 'react';
import {
    AppProvider,
    Frame,
    Page,
    Tabs,
    FooterHelp,
    Link,
    Button,
    Popover,
    ActionList
} from '@shopify/polaris';
import enTranslations from '@shopify/polaris/locales/en.json';
import frTranslations from '@shopify/polaris/locales/fr.json';
import {useTranslation} from 'react-i18next';
import Configuration from './pages/Configuration';
import Customers from './pages/Customers';
import Sales from './pages/Sales';

function Navigation() {
    const [t, i18n] = useTranslation();
    const [selected, setSelected] = useState(0);
    const [active, setActive] = useState(false);

    const polarisTranslation = {
        fr: frTranslations,
        en: enTranslations
    }

    const handleTabChange = useCallback(
        (selectedTabIndex) => setSelected(selectedTabIndex),
        [],
    );

    const toggleActive = useCallback(
        () => setActive((active) => !active),
        []
    );

    const tabs = [
        {
            id: 'configuration',
            content: t('Configuration'),
            panelID: 'configuration-content'
        },
        {
            id: 'customers',
            content: t('Customers'),
            panelID: 'customers-content'
        },
        {
            id: 'sales',
            content: t('Sales'),
            panelID: 'sales-content'
        }
    ];

    const activator = (
        <Button onClick={toggleActive} disclosure plain>
            {t('Change the current language')}
        </Button>
    );

    const pages = [
        <Configuration/>,
        <Customers/>,
        <Sales/>
    ];

    return (
        <AppProvider i18n={polarisTranslation[i18n.language]}>
            <Frame>
                <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange}>
                    <Page fullWidth>
                        {pages[selected]}
                    </Page>
                </Tabs>
                <FooterHelp>
                    {t('This demo was made by')} <Link url="https://debuss-a.me" external>
                    Alexandre Debusschère
                </Link>.
                    <div style={{textAlign: 'center'}}>
                        <Popover active={active} activator={activator} onClose={toggleActive}>
                            <ActionList
                                items={[
                                    {
                                        content: t('English'),
                                        onAction: () => i18n.changeLanguage('en'),
                                        disabled: i18n.language === 'en'
                                    },
                                    {
                                        content: t('French'),
                                        onAction: () => i18n.changeLanguage('fr'),
                                        disabled: i18n.language === 'fr'
                                    },
                                ]}
                            />
                        </Popover>
                    </div>
                </FooterHelp>
            </Frame>
        </AppProvider>
    );
}

export default Navigation;
