/**
 * @author debuss-a
 */

import React from 'react';
import {
    Layout,
    Card,
    DataTable,
    Link,
} from '@shopify/polaris';
import { useTranslation } from 'react-i18next';

function Sales() {
    const [t] = useTranslation();
    const rows = [
        [t('Emerald Silk Gown'), '$875.00', 124689, 140, '$122,500.00'],
        [t('Mauve Cashmere Scarf'), '$230.00', 124533, 83, '$19,090.00'],
        [
            t('Navy Merino Wool Blazer with khaki chinos and yellow belt'),
            '$445.00',
            124518,
            32,
            '$14,240.00',
        ],
    ];

    return (
        <React.Fragment>
            <Layout>
                <Layout.AnnotatedSection
                    title={t('Sales by product')}
                    description={<span>
                        {t('A list of sales in a DataTable component.')} <Link
                        url="https://polaris.shopify.com/components/lists-and-tables/data-table"
                        external
                    >{t('More information in the official documentation.')}</Link>
                    </span>}
                >
                    <Card>
                        <DataTable
                            showTotalsInFooter
                            columnContentTypes={[
                                'text',
                                'numeric',
                                'numeric',
                                'numeric',
                                'numeric',
                            ]}
                            headings={[
                                t('Product'),
                                t('Price'),
                                t('SKU Number'),
                                t('Net quantity'),
                                t('Net sales'),
                            ]}
                            rows={rows}
                            totals={['', '', '', '', '$155,830.00']}
                            totalsName={{
                                singular: t('Total net sales'),
                                plural: t('Total net sales'),
                            }}
                        />
                    </Card>
                </Layout.AnnotatedSection>
            </Layout>
        </React.Fragment>
    );
}

export default Sales;
