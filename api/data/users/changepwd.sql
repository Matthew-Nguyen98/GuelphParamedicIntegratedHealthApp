UPDATE [GWParamedic].[Users]
SET [passwordHashed] = @newHashedPwd
WHERE [emailAddress] = @emailAddress