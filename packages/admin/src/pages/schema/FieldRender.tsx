import React from 'react'
import { ExclamationCircleTwoTone } from '@ant-design/icons'
import { Card, Space, Typography, Button, Tooltip } from 'antd'

import { FieldTypes } from '@/common'

export interface FieldType {
    icon: React.ReactNode
    name: string
    type: string
}

export const SchemaFieldRender: React.SFC<{
    schema: SchemaV2
    actionRender: (field: SchemaFieldV2) => React.ReactNode
}> = (props) => {
    const { schema, actionRender } = props

    return (
        <div>
            {schema?.fields
                ?.filter((_) => _)
                .map((field, index) => {
                    const type = FieldTypes.find((_) => _.type === field.type)

                    return (
                        <Card hoverable key={index} className="schema-field-card">
                            <Space style={{ flex: '1 1 auto' }}>
                                <div className="icon">{type?.icon}</div>
                                <div className="flex-column">
                                    <Space align="center" style={{ marginBottom: '10px' }}>
                                        <Typography.Title level={4} style={{ marginBottom: 0 }}>
                                            {field.displayName}
                                        </Typography.Title>
                                        <Typography.Text strong># {field.name}</Typography.Text>
                                        <Tooltip title={field.description}>
                                            <ExclamationCircleTwoTone
                                                style={{ fontSize: '16px' }}
                                            />
                                        </Tooltip>
                                    </Space>
                                    <Space>
                                        <Button size="small">{type?.name}</Button>
                                    </Space>
                                </div>
                            </Space>
                            <Space>{actionRender(field)}</Space>
                        </Card>
                    )
                })}
        </div>
    )
}
