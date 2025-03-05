// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const SIMPLE_SYN_REGISTRATION_METADATA: Metadata = {
    id: "8bdec8bc3a221887858c098adc61e63838dc3139.boutiques",
    name: "simpleSynRegistration",
    package: "ants",
    container_image_tag: "antsx/ants:v2.5.3",
};


interface SimpleSynRegistrationParameters {
    "__STYXTYPE__": "simpleSynRegistration";
    "fixed_image": InputPathType;
    "moving_image": InputPathType;
    "initial_transform": string;
    "output_prefix": string;
}


function dynCargs(
    t: string,
): Function | undefined {
    /**
     * Get build cargs function by command type.
    
     * @param t Command type
    
     * @returns Build cargs function.
     */
    const cargsFuncs = {
        "simpleSynRegistration": simple_syn_registration_cargs,
    };
    return cargsFuncs[t];
}


function dynOutputs(
    t: string,
): Function | undefined {
    /**
     * Get build outputs function by command type.
    
     * @param t Command type
    
     * @returns Build outputs function.
     */
    const outputsFuncs = {
        "simpleSynRegistration": simple_syn_registration_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `simple_syn_registration(...)`.
 *
 * @interface
 */
interface SimpleSynRegistrationOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * The output registered image.
     */
    registered_image: OutputPathType;
    /**
     * The output transformation matrix.
     */
    transform_matrix: OutputPathType;
}


function simple_syn_registration_params(
    fixed_image: InputPathType,
    moving_image: InputPathType,
    initial_transform: string,
    output_prefix: string,
): SimpleSynRegistrationParameters {
    /**
     * Build parameters.
    
     * @param fixed_image The fixed image for registration.
     * @param moving_image The moving image to be registered.
     * @param initial_transform The initial transform for registration.
     * @param output_prefix Prefix for the output file name without any extension.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "simpleSynRegistration" as const,
        "fixed_image": fixed_image,
        "moving_image": moving_image,
        "initial_transform": initial_transform,
        "output_prefix": output_prefix,
    };
    return params;
}


function simple_syn_registration_cargs(
    params: SimpleSynRegistrationParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("simpleSynRegistration");
    cargs.push([execution.inputFile((params["fixed_image"] ?? null)), ","].join(''));
    cargs.push([execution.inputFile((params["moving_image"] ?? null)), ","].join(''));
    cargs.push([(params["initial_transform"] ?? null), ","].join(''));
    cargs.push((params["output_prefix"] ?? null));
    return cargs;
}


function simple_syn_registration_outputs(
    params: SimpleSynRegistrationParameters,
    execution: Execution,
): SimpleSynRegistrationOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: SimpleSynRegistrationOutputs = {
        root: execution.outputFile("."),
        registered_image: execution.outputFile([(params["output_prefix"] ?? null), "Registered.nii.gz"].join('')),
        transform_matrix: execution.outputFile([(params["output_prefix"] ?? null), "Transform.mat"].join('')),
    };
    return ret;
}


function simple_syn_registration_execute(
    params: SimpleSynRegistrationParameters,
    execution: Execution,
): SimpleSynRegistrationOutputs {
    /**
     * A simple SyN registration tool.
     * 
     * Author: ANTs Developers
     * 
     * URL: https://github.com/ANTsX/ANTs
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `SimpleSynRegistrationOutputs`).
     */
    params = execution.params(params)
    const cargs = simple_syn_registration_cargs(params, execution)
    const ret = simple_syn_registration_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function simple_syn_registration(
    fixed_image: InputPathType,
    moving_image: InputPathType,
    initial_transform: string,
    output_prefix: string,
    runner: Runner | null = null,
): SimpleSynRegistrationOutputs {
    /**
     * A simple SyN registration tool.
     * 
     * Author: ANTs Developers
     * 
     * URL: https://github.com/ANTsX/ANTs
    
     * @param fixed_image The fixed image for registration.
     * @param moving_image The moving image to be registered.
     * @param initial_transform The initial transform for registration.
     * @param output_prefix Prefix for the output file name without any extension.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `SimpleSynRegistrationOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(SIMPLE_SYN_REGISTRATION_METADATA);
    const params = simple_syn_registration_params(fixed_image, moving_image, initial_transform, output_prefix)
    return simple_syn_registration_execute(params, execution);
}


export {
      SIMPLE_SYN_REGISTRATION_METADATA,
      SimpleSynRegistrationOutputs,
      SimpleSynRegistrationParameters,
      simple_syn_registration,
      simple_syn_registration_params,
};
