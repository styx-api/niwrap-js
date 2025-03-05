// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const V_3D_TOY_PROG_METADATA: Metadata = {
    id: "1311a81e171aae35dd519b54379bb3bfad692a46.boutiques",
    name: "3dToyProg",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface V3dToyProgParameters {
    "__STYXTYPE__": "3dToyProg";
    "input_dataset": InputPathType;
    "output_prefix"?: string | null | undefined;
    "mask_dataset"?: InputPathType | null | undefined;
    "output_datum"?: "float" | "short" | null | undefined;
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
        "3dToyProg": v_3d_toy_prog_cargs,
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


/**
 * Output object returned when calling `v_3d_toy_prog(...)`.
 *
 * @interface
 */
interface V3dToyProgOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function v_3d_toy_prog_params(
    input_dataset: InputPathType,
    output_prefix: string | null = null,
    mask_dataset: InputPathType | null = null,
    output_datum: "float" | "short" | null = null,
): V3dToyProgParameters {
    /**
     * Build parameters.
    
     * @param input_dataset Reference dataset
     * @param output_prefix Prefix of the output datasets
     * @param mask_dataset Restrict analysis to non-zero voxels in the mask dataset
     * @param output_datum Output datum type for one of the datasets. Choose from 'float' or 'short'. Default is 'float'.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "3dToyProg" as const,
        "input_dataset": input_dataset,
    };
    if (output_prefix !== null) {
        params["output_prefix"] = output_prefix;
    }
    if (mask_dataset !== null) {
        params["mask_dataset"] = mask_dataset;
    }
    if (output_datum !== null) {
        params["output_datum"] = output_datum;
    }
    return params;
}


function v_3d_toy_prog_cargs(
    params: V3dToyProgParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("3dToyProg");
    cargs.push(
        "-input",
        execution.inputFile((params["input_dataset"] ?? null))
    );
    if ((params["output_prefix"] ?? null) !== null) {
        cargs.push(
            "-prefix",
            (params["output_prefix"] ?? null)
        );
    }
    if ((params["mask_dataset"] ?? null) !== null) {
        cargs.push(
            "-mask",
            execution.inputFile((params["mask_dataset"] ?? null))
        );
    }
    if ((params["output_datum"] ?? null) !== null) {
        cargs.push(
            "-datum",
            (params["output_datum"] ?? null)
        );
    }
    return cargs;
}


function v_3d_toy_prog_outputs(
    params: V3dToyProgParameters,
    execution: Execution,
): V3dToyProgOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: V3dToyProgOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function v_3d_toy_prog_execute(
    params: V3dToyProgParameters,
    execution: Execution,
): V3dToyProgOutputs {
    /**
     * A program to illustrate dataset creation and manipulation in C using AFNI's API.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `V3dToyProgOutputs`).
     */
    params = execution.params(params)
    const cargs = v_3d_toy_prog_cargs(params, execution)
    const ret = v_3d_toy_prog_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function v_3d_toy_prog(
    input_dataset: InputPathType,
    output_prefix: string | null = null,
    mask_dataset: InputPathType | null = null,
    output_datum: "float" | "short" | null = null,
    runner: Runner | null = null,
): V3dToyProgOutputs {
    /**
     * A program to illustrate dataset creation and manipulation in C using AFNI's API.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param input_dataset Reference dataset
     * @param output_prefix Prefix of the output datasets
     * @param mask_dataset Restrict analysis to non-zero voxels in the mask dataset
     * @param output_datum Output datum type for one of the datasets. Choose from 'float' or 'short'. Default is 'float'.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `V3dToyProgOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(V_3D_TOY_PROG_METADATA);
    const params = v_3d_toy_prog_params(input_dataset, output_prefix, mask_dataset, output_datum)
    return v_3d_toy_prog_execute(params, execution);
}


export {
      V3dToyProgOutputs,
      V3dToyProgParameters,
      V_3D_TOY_PROG_METADATA,
      v_3d_toy_prog,
      v_3d_toy_prog_params,
};
