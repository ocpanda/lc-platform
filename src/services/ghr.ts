import LC_GOOGLE_CONFIG from '@/configs/lc-platform-key.json'
import DOC_CONFIG from '@/configs/doc-config.json'
import useGoogleSheets from 'use-google-sheets'
import { useEffect } from 'react'

// const useGapi = async () => {
//   useEffect(() => {
//     const { data } = useGoogleSheets({
//       apiKey: LC_GOOGLE_CONFIG.api_key,
//       sheetId: DOC_CONFIG.performance,
//     })
  
//     console.log(data)
//   })
// }

// useGapi()

// import { GoogleSpreadsheet } from 'google-spreadsheet'
// console.log(GoogleSpreadsheet)
// const init = async ({
//   docType
// }: { docType: 'performance' }) => {
//   const doc = new GoogleSpreadsheet(DOC_CONFIG[docType])

//   await doc.useServiceAccountAuth({
//     client_email: LC_GOOGLE_CONFIG.client_email,
//     private_key: LC_GOOGLE_CONFIG.private_key,
//   });

//   return {
//     doc,
//   }
// }

// export const ghr = async ({
//   docType
// }: { docType: 'performance' }) => {
//   const { doc } = await init({ docType })

//   console.log(await doc.loadInfo())
// }