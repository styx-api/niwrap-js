// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const CONVERT_AFFINE_METADATA: Metadata = {
    id: "448dc27f1589458b110e4df61c90c24f558f2974.boutiques",
    name: "convert-affine",
    package: "workbench",
    container_image_tag: "brainlife/connectome_workbench:1.5.0-freesurfer-update",
};


interface ConvertAffineFromWorldParameters {
    "__STYXTYPE__": "from_world";
    "input": string;
    "opt_inverse": boolean;
}


interface ConvertAffineFromFlirtParameters {
    "__STYXTYPE__": "from_flirt";
    "input": string;
    "source_volume": string;
    "target_volume": string;
}


interface ConvertAffineToWorldParameters {
    "__STYXTYPE__": "to_world";
    "output": string;
    "opt_inverse": boolean;
}


interface ConvertAffineToFlirtParameters {
    "__STYXTYPE__": "to_flirt";
    "output": string;
    "source_volume": string;
    "target_volume": string;
}


interface ConvertAffineParameters {
    "__STYXTYPE__": "convert-affine";
    "from_world"?: ConvertAffineFromWorldParameters | null | undefined;
    "opt_from_itk_input"?: string | null | undefined;
    "from_flirt"?: ConvertAffineFromFlirtParameters | null | undefined;
    "to_world"?: ConvertAffineToWorldParameters | null | undefined;
    "opt_to_itk_output"?: string | null | undefined;
    "to_flirt"?: Array<ConvertAffineToFlirtParameters> | null | undefined;
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
        "convert-affine": convert_affine_cargs,
        "from_world": convert_affine_from_world_cargs,
        "from_flirt": convert_affine_from_flirt_cargs,
        "to_world": convert_affine_to_world_cargs,
        "to_flirt": convert_affine_to_flirt_cargs,
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
    };
    return outputsFuncs[t];
}


function convert_affine_from_world_params(
    input: string,
    opt_inverse: boolean = false,
): ConvertAffineFromWorldParameters {
    /**
     * Build parameters.
    
     * @param input the input affine
     * @param opt_inverse for files that use 'target to source' convention
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "from_world" as const,
        "input": input,
        "opt_inverse": opt_inverse,
    };
    return params;
}


function convert_affine_from_world_cargs(
    params: ConvertAffineFromWorldParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("-from-world");
    cargs.push((params["input"] ?? null));
    if ((params["opt_inverse"] ?? null)) {
        cargs.push("-inverse");
    }
    return cargs;
}


function convert_affine_from_flirt_params(
    input: string,
    source_volume: string,
    target_volume: string,
): ConvertAffineFromFlirtParameters {
    /**
     * Build parameters.
    
     * @param input the input affine
     * @param source_volume the source volume used when generating the input affine
     * @param target_volume the target volume used when generating the input affine
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "from_flirt" as const,
        "input": input,
        "source_volume": source_volume,
        "target_volume": target_volume,
    };
    return params;
}


function convert_affine_from_flirt_cargs(
    params: ConvertAffineFromFlirtParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("-from-flirt");
    cargs.push((params["input"] ?? null));
    cargs.push((params["source_volume"] ?? null));
    cargs.push((params["target_volume"] ?? null));
    return cargs;
}


function convert_affine_to_world_params(
    output: string,
    opt_inverse: boolean = false,
): ConvertAffineToWorldParameters {
    /**
     * Build parameters.
    
     * @param output output - the output affine
     * @param opt_inverse write file using 'target to source' convention
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "to_world" as const,
        "output": output,
        "opt_inverse": opt_inverse,
    };
    return params;
}


function convert_affine_to_world_cargs(
    params: ConvertAffineToWorldParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("-to-world");
    cargs.push((params["output"] ?? null));
    if ((params["opt_inverse"] ?? null)) {
        cargs.push("-inverse");
    }
    return cargs;
}


function convert_affine_to_flirt_params(
    output: string,
    source_volume: string,
    target_volume: string,
): ConvertAffineToFlirtParameters {
    /**
     * Build parameters.
    
     * @param output output - the output affine
     * @param source_volume the volume you want to apply the transform to
     * @param target_volume the target space you want the transformed volume to match
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "to_flirt" as const,
        "output": output,
        "source_volume": source_volume,
        "target_volume": target_volume,
    };
    return params;
}


function convert_affine_to_flirt_cargs(
    params: ConvertAffineToFlirtParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("-to-flirt");
    cargs.push((params["output"] ?? null));
    cargs.push((params["source_volume"] ?? null));
    cargs.push((params["target_volume"] ?? null));
    return cargs;
}


/**
 * Output object returned when calling `convert_affine(...)`.
 *
 * @interface
 */
interface ConvertAffineOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function convert_affine_params(
    from_world: ConvertAffineFromWorldParameters | null = null,
    opt_from_itk_input: string | null = null,
    from_flirt: ConvertAffineFromFlirtParameters | null = null,
    to_world: ConvertAffineToWorldParameters | null = null,
    opt_to_itk_output: string | null = null,
    to_flirt: Array<ConvertAffineToFlirtParameters> | null = null,
): ConvertAffineParameters {
    /**
     * Build parameters.
    
     * @param from_world input is a NIFTI 'world' affine
     * @param opt_from_itk_input input is an ITK matrix: the input affine
     * @param from_flirt input is a flirt matrix
     * @param to_world write output as a NIFTI 'world' affine
     * @param opt_to_itk_output write output as an ITK affine: output - the output affine
     * @param to_flirt write output as a flirt matrix
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "convert-affine" as const,
    };
    if (from_world !== null) {
        params["from_world"] = from_world;
    }
    if (opt_from_itk_input !== null) {
        params["opt_from_itk_input"] = opt_from_itk_input;
    }
    if (from_flirt !== null) {
        params["from_flirt"] = from_flirt;
    }
    if (to_world !== null) {
        params["to_world"] = to_world;
    }
    if (opt_to_itk_output !== null) {
        params["opt_to_itk_output"] = opt_to_itk_output;
    }
    if (to_flirt !== null) {
        params["to_flirt"] = to_flirt;
    }
    return params;
}


function convert_affine_cargs(
    params: ConvertAffineParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("wb_command");
    cargs.push("-convert-affine");
    if ((params["from_world"] ?? null) !== null) {
        cargs.push(...dynCargs((params["from_world"] ?? null).__STYXTYPE__)((params["from_world"] ?? null), execution));
    }
    if ((params["opt_from_itk_input"] ?? null) !== null) {
        cargs.push(
            "-from-itk",
            (params["opt_from_itk_input"] ?? null)
        );
    }
    if ((params["from_flirt"] ?? null) !== null) {
        cargs.push(...dynCargs((params["from_flirt"] ?? null).__STYXTYPE__)((params["from_flirt"] ?? null), execution));
    }
    if ((params["to_world"] ?? null) !== null) {
        cargs.push(...dynCargs((params["to_world"] ?? null).__STYXTYPE__)((params["to_world"] ?? null), execution));
    }
    if ((params["opt_to_itk_output"] ?? null) !== null) {
        cargs.push(
            "-to-itk",
            (params["opt_to_itk_output"] ?? null)
        );
    }
    if ((params["to_flirt"] ?? null) !== null) {
        cargs.push(...(params["to_flirt"] ?? null).map(s => dynCargs(s.__STYXTYPE__)(s, execution)).flat());
    }
    return cargs;
}


function convert_affine_outputs(
    params: ConvertAffineParameters,
    execution: Execution,
): ConvertAffineOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: ConvertAffineOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function convert_affine_execute(
    params: ConvertAffineParameters,
    execution: Execution,
): ConvertAffineOutputs {
    /**
     * Convert an affine file between conventions.
     * 
     * NIFTI world matrices can be used directly on mm coordinates via matrix multiplication, they use the NIFTI coordinate system, that is, positive X is right, positive Y is anterior, and positive Z is superior.  Note that wb_command assumes that world matrices transform source coordinates to target coordinates, while other tools may use affines that transform target coordinates to source coordinates.
     * 
     * The ITK format is used by ANTS.
     * 
     * You must specify exactly one -from option, but you may specify multiple -to options, and -to-flirt may be specified more than once.
     * 
     * Author: Connectome Workbench Developers
     * 
     * URL: https://github.com/Washington-University/workbench
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `ConvertAffineOutputs`).
     */
    params = execution.params(params)
    const cargs = convert_affine_cargs(params, execution)
    const ret = convert_affine_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function convert_affine(
    from_world: ConvertAffineFromWorldParameters | null = null,
    opt_from_itk_input: string | null = null,
    from_flirt: ConvertAffineFromFlirtParameters | null = null,
    to_world: ConvertAffineToWorldParameters | null = null,
    opt_to_itk_output: string | null = null,
    to_flirt: Array<ConvertAffineToFlirtParameters> | null = null,
    runner: Runner | null = null,
): ConvertAffineOutputs {
    /**
     * Convert an affine file between conventions.
     * 
     * NIFTI world matrices can be used directly on mm coordinates via matrix multiplication, they use the NIFTI coordinate system, that is, positive X is right, positive Y is anterior, and positive Z is superior.  Note that wb_command assumes that world matrices transform source coordinates to target coordinates, while other tools may use affines that transform target coordinates to source coordinates.
     * 
     * The ITK format is used by ANTS.
     * 
     * You must specify exactly one -from option, but you may specify multiple -to options, and -to-flirt may be specified more than once.
     * 
     * Author: Connectome Workbench Developers
     * 
     * URL: https://github.com/Washington-University/workbench
    
     * @param from_world input is a NIFTI 'world' affine
     * @param opt_from_itk_input input is an ITK matrix: the input affine
     * @param from_flirt input is a flirt matrix
     * @param to_world write output as a NIFTI 'world' affine
     * @param opt_to_itk_output write output as an ITK affine: output - the output affine
     * @param to_flirt write output as a flirt matrix
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `ConvertAffineOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(CONVERT_AFFINE_METADATA);
    const params = convert_affine_params(from_world, opt_from_itk_input, from_flirt, to_world, opt_to_itk_output, to_flirt)
    return convert_affine_execute(params, execution);
}


export {
      CONVERT_AFFINE_METADATA,
      ConvertAffineFromFlirtParameters,
      ConvertAffineFromWorldParameters,
      ConvertAffineOutputs,
      ConvertAffineParameters,
      ConvertAffineToFlirtParameters,
      ConvertAffineToWorldParameters,
      convert_affine,
      convert_affine_from_flirt_params,
      convert_affine_from_world_params,
      convert_affine_params,
      convert_affine_to_flirt_params,
      convert_affine_to_world_params,
};
