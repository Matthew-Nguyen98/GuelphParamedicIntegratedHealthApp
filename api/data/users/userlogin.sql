SELECT [userID]
      ,[emailAddress]
      ,[firstName]
      ,[lastName]
      ,[passwordHashed]
      ,[isAdmin]
      ,[isActive]
      ,[isResetingPwd]
  FROM [GWParamedic].[Users]
WHERE [emailAddress] = @emailAddress
AND [passwordHashed] = @inputPwd