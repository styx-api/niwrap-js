// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const FSL_REG_METADATA: Metadata = {
    id: "4895beb092fe4dcdb0c922d95e8186eb09a5877f.boutiques",
    name: "fsl_reg",
    package: "fsl",
    container_image_tag: "brainlife/fsl:6.0.4-patched2",
};


interface FslRegParameters {
    "__STYXTYPE__": "fsl_reg";
    "input_file": InputPathType;
    "reference_file": InputPathType;
    "output_file": string;
    "estimate_only_flag": boolean;
    "affine_only_flag": boolean;
    "fnirt_fa_config_flag": boolean;
    "flirt_options"?: string | null | undefined;
    "fnirt_options"?: string | null | undefined;
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
        "fsl_reg": fsl_reg_cargs,
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
        "fsl_reg": fsl_reg_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `fsl_reg(...)`.
 *
 * @interface
 */
interface FslRegOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output transformation file
     */
    output_transform_file: OutputPathType;
}


function fsl_reg_params(
    input_file: InputPathType,
    reference_file: InputPathType,
    output_file: string,
    estimate_only_flag: boolean = false,
    affine_only_flag: boolean = false,
    fnirt_fa_config_flag: boolean = false,
    flirt_options: string | null = null,
    fnirt_options: string | null = null,
): FslRegParameters {
    /**
     * Build parameters.
    
     * @param input_file Input image file
     * @param reference_file Reference image file
     * @param output_file Output transformation file
     * @param estimate_only_flag Estimate transformation but don't apply it
     * @param affine_only_flag Affine-only registration
     * @param fnirt_fa_config_flag Use FNIRT config file optimised for FA data
     * @param flirt_options Options to be passed onto flirt (inside double-quotes)
     * @param fnirt_options Options to be passed onto fnirt (inside double-quotes)
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "fsl_reg" as const,
        "input_file": input_file,
        "reference_file": reference_file,
        "output_file": output_file,
        "estimate_only_flag": estimate_only_flag,
        "affine_only_flag": affine_only_flag,
        "fnirt_fa_config_flag": fnirt_fa_config_flag,
    };
    if (flirt_options !== null) {
        params["flirt_options"] = flirt_options;
    }
    if (fnirt_options !== null) {
        params["fnirt_options"] = fnirt_options;
    }
    return params;
}


function fsl_reg_cargs(
    params: FslRegParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("fsl_reg");
    cargs.push(execution.inputFile((params["input_file"] ?? null)));
    cargs.push(execution.inputFile((params["reference_file"] ?? null)));
    cargs.push((params["output_file"] ?? null));
    if ((params["estimate_only_flag"] ?? null)) {
        cargs.push("-e");
    }
    if ((params["affine_only_flag"] ?? null)) {
        cargs.push("-a");
    }
    if ((params["fnirt_fa_config_flag"] ?? null)) {
        cargs.push("-FA");
    }
    if ((params["flirt_options"] ?? null) !== null) {
        cargs.push(
            "-flirt",
            (params["flirt_options"] ?? null)
        );
    }
    if ((params["fnirt_options"] ?? null) !== null) {
        cargs.push(
            "-fnirt",
            (params["fnirt_options"] ?? null)
        );
    }
    return cargs;
}


function fsl_reg_outputs(
    params: FslRegParameters,
    execution: Execution,
): FslRegOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: FslRegOutputs = {
        root: execution.outputFile("."),
        output_transform_file: execution.outputFile([(params["output_file"] ?? null)].join('')),
    };
    return ret;
}


function fsl_reg_execute(
    params: FslRegParameters,
    execution: Execution,
): FslRegOutputs {
    /**
     * Image registration using FSL tools.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `FslRegOutputs`).
     */
    params = execution.params(params)
    const cargs = fsl_reg_cargs(params, execution)
    const ret = fsl_reg_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function fsl_reg(
    input_file: InputPathType,
    reference_file: InputPathType,
    output_file: string,
    estimate_only_flag: boolean = false,
    affine_only_flag: boolean = false,
    fnirt_fa_config_flag: boolean = false,
    flirt_options: string | null = null,
    fnirt_options: string | null = null,
    runner: Runner | null = null,
): FslRegOutputs {
    /**
     * Image registration using FSL tools.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param input_file Input image file
     * @param reference_file Reference image file
     * @param output_file Output transformation file
     * @param estimate_only_flag Estimate transformation but don't apply it
     * @param affine_only_flag Affine-only registration
     * @param fnirt_fa_config_flag Use FNIRT config file optimised for FA data
     * @param flirt_options Options to be passed onto flirt (inside double-quotes)
     * @param fnirt_options Options to be passed onto fnirt (inside double-quotes)
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `FslRegOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(FSL_REG_METADATA);
    const params = fsl_reg_params(input_file, reference_file, output_file, estimate_only_flag, affine_only_flag, fnirt_fa_config_flag, flirt_options, fnirt_options)
    return fsl_reg_execute(params, execution);
}


export {
      FSL_REG_METADATA,
      FslRegOutputs,
      FslRegParameters,
      fsl_reg,
      fsl_reg_params,
};
