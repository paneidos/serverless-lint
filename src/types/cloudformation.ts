export interface BaseResource {
    Type: string
    Properties?: Record<string, unknown>
}

export type ParameterTypeAWSSpecific =
    | 'AWS::EC2::AvailabilityZone::Name'
    | 'AWS::EC2::Image::Id'
    | 'AWS::EC2::Instance::Id'
    | 'AWS::EC2::KeyPair::KeyName'
    | 'AWS::EC2::SecurityGroup::GroupName'
    | 'AWS::EC2::SecurityGroup::Id'
    | 'AWS::EC2::Subnet::Id'
    | 'AWS::EC2::Volume::Id'
    | 'AWS::EC2::VPC::Id'
    | 'AWS::Route53::HostedZone::Id'
export type ParameterTypeSSM =
    | 'AWS::SSM::Parameter::Name'
    | 'AWS::SSM::Parameter::Value<String>'
    | 'AWS::SSM::Parameter::Value<List<String>>'
    | 'AWS::SSM::Parameter::Value<CommaDelimitedList>'
    | `AWS::SSM::Parameter::Value<${ParameterTypeAWSSpecific}>`
    | `AWS::SSM::Parameter::Value<List<${ParameterTypeAWSSpecific}>>`

export type ParameterType =
    | 'String'
    | 'Number'
    | 'List<Number>'
    | 'CommaDelimitedList'
    | ParameterTypeAWSSpecific
    | `List<${ParameterTypeAWSSpecific}>`

export interface Parameter {
    AllowedPattern?: string
    AllowedValues?: string[]
    ConstraintDescription?: string
    Default?: string
    Description?: string
    MaxLength?: number
    MaxValue?: number
    MinLength?: number
    MinValue?: number
    NoEcho?: boolean
    Type: ParameterType
}

export interface RawTemplate {
    AWSTemplateFormatVersion?: '2010-09-09'
    Resources: Record<string, BaseResource>
    Description?: string
    Metadata?: unknown,
    Parameters?: {
        [key: string]: Parameter
    }
    Rules?: unknown,
    Conditions?: unknown,
    Transform?: unknown,
    Outputs?: unknown,
}
