import { UseQueryResult } from '@tanstack/react-query'
import { AutoCenter, DotLoading, ErrorBlock, Button } from 'antd-mobile'
import React from 'react'

export const QueryStatus: React.FC<{
  query: UseQueryResult
}> = React.memo(({ query: { isLoading, error, refetch } }) => {
  return (
    <>
      {isLoading && (
        <AutoCenter style={{ padding: 30 }}>
          <DotLoading />
        </AutoCenter>
      )}
      {!isLoading && error && (
        <>

        <ErrorBlock status='default' description={error?.message} title='Ошибка'></ErrorBlock>
        <AutoCenter>
            <Button color='warning'
            onClick={() => refetch()}>Повторить попытку</Button>
          </AutoCenter>
        </>
      )}
    </>
  )
})
