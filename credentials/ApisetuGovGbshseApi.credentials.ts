import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class ApisetuGovGbshseApi implements ICredentialType {
        name = 'N8nDevApisetuGovGbshseApi';

        displayName = 'Apisetu Gov Gbshse API';

        icon: Icon = { light: 'file:../nodes/ApisetuGovGbshse/apisetu-gov-gbshse.svg', dark: 'file:../nodes/ApisetuGovGbshse/apisetu-gov-gbshse.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://apisetu.gov.in/gbshse/v3',
                        required: true,
                        placeholder: 'https://apisetu.gov.in/gbshse/v3',
                        description: 'The base URL of your Apisetu Gov Gbshse API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                'X-APISETU-APIKEY': '={{$credentials.apiKey}}',
                        },
                },
        };


}
