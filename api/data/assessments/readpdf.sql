SELECT [GWParamedic].[Assessments]
           ([assessmentID]
           ,[assessmentDescription]
           ,[fileBinary]
           ,[fileURI]
           ,[categoryID])
FROM [GWParamedic].[Assessments]
WHERE [assessmentID] = @assessmentID