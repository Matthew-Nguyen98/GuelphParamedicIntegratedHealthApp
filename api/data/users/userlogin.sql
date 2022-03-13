SELECT [userID]
      ,[emailAddress]
      ,[passwordHashed]
      ,[isAdmin]
      ,[isActive]
      ,[isResetingPwd]
  FROM [GWParamedic].[Users]
WHERE [emailAddress] = @emailAddress
AND [passwordHashed] = @inputPwd