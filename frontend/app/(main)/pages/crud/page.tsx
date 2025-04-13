/* eslint-disable @next/next/no-img-element */
'use client';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useEffect, useRef, useState } from 'react';
import TenantService from '@/demo/service/TenantService';

/* @todo Used 'as any' for types here. Will fix in next version due to onSelectionChange event type issue. */
const Crud = () => {
    const [tenants, setTenants] = useState(null);
    const dt = useRef<DataTable<any>>(null);

    useEffect(() => {
        // TenantService.getAll().get.then((data) => setProducts(data as any));
        TenantService.get('/getAll')
            .then((res) => setTenants(res.data))
            .catch((error) => console.error(error));
    }, []);

    return (
        <div>
            {/* {
            tenants.map(() => (
                <div key={user.id}>{user.name}</div>
            ))} */}
        </div>
    );
};

export default Crud;
