
SELECT [resourceID]
      ,[firstName]
      ,[lastName]
      ,[companyName]
      ,[position]
      ,[resourceLocation]
      ,[officePhone]
      ,[mobilePhone]
      ,[emailAddress]
      ,[website]
      ,[categoryID]
  FROM [GWParamedic].[Resources]
WHERE [resourceID] = @resourceId