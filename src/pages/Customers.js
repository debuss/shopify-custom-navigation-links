/**
 * @author debuss-a
 */

import React, {useState} from 'react';
import {
    Layout,
    Card,
    ResourceList,
    ResourceItem,
    Link,
    Avatar,
    TextStyle
} from '@shopify/polaris';
import { useTranslation } from 'react-i18next';

function Customers() {
    const [t] = useTranslation();
    const [selectedItems, setSelectedItems] = useState([]);

    const resourceName = {
        singular: t('customer'),
        plural: t('customers'),
    };

    const items = [
        {
            id: 341,
            url: 'customers/341',
            name: 'Mae Jemison',
            location: 'Decatur, USA',
        },
        {
            id: 256,
            url: 'customers/256',
            name: 'Ellen Ochoa',
            location: 'Los Angeles, USA',
        },
        {
            id: 276,
            url: 'customers/276',
            name: 'Joe Smith',
            location: 'Arizona, USA',
        },
        {
            id: 349,
            url: 'customers/349',
            name: 'Haden Jerado',
            location: 'Decatur, USA',
        },
        {
            id: 419,
            url: 'customers/419',
            name: 'Tom Thommas',
            location: 'Florida, USA',
        },
        {
            id: 516,
            url: 'customers/516',
            name: 'Emily Amrak',
            location: 'Texas, USA',
        }
    ];

    return (
        <React.Fragment>
            <Layout>
                <Layout.AnnotatedSection
                    title={t('Customers')}
                    description={<span>
                        {t('A list of customers in a ResourceList component.')} <Link
                        url="https://polaris.shopify.com/components/lists-and-tables/resource-list"
                        external
                    >{t('More information in the official documentation.')}</Link>
                    </span>}
                >
                    <Card>
                        <ResourceList
                            resourceName={resourceName}
                            items={items}
                            renderItem={renderItem}
                            selectedItems={selectedItems}
                            onSelectionChange={setSelectedItems}
                            selectable
                        />
                    </Card>
                </Layout.AnnotatedSection>
            </Layout>
        </React.Fragment>
    );

    function renderItem(item) {
        const {id, url, name, location} = item;
        const media = <Avatar customer size="medium" name={name} />;

        return (
            <ResourceItem
                id={id}
                url={url}
                media={media}
                accessibilityLabel={`${t('View details for')} ${name}`}
            >
                <h3>
                    <TextStyle variation="strong">{name}</TextStyle>
                </h3>
                <div>{location}</div>
            </ResourceItem>
        );
    }
}

export default Customers;
