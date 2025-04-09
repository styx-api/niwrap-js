// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const V_3D_EDU_01_SCALE_METADATA: Metadata = {
    id: "882d93a008679bc5297ea9ae14de61c1a4182b85.boutiques",
    name: "3dEdu_01_scale",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface V3dEdu01ScaleParameters {
    "__STYXTYPE__": "3dEdu_01_scale";
    "input": InputPathType;
    "mask"?: InputPathType | null | undefined;
    "mult_factors"?: Array<number> | null | undefined;
    "option_flag": boolean;
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
        "3dEdu_01_scale": v_3d_edu_01_scale_cargs,
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
        "3dEdu_01_scale": v_3d_edu_01_scale_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `v_3d_edu_01_scale(...)`.
 *
 * @interface
 */
interface V3dEdu01ScaleOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output scaled and/or masked copy of the [0]th volume of the input dataset
     */
    outfile: OutputPathType;
}


function v_3d_edu_01_scale_params(
    input: InputPathType,
    mask: InputPathType | null = null,
    mult_factors: Array<number> | null = null,
    option_flag: boolean = false,
): V3dEdu01ScaleParameters {
    /**
     * Build parameters.
    
     * @param input Input dataset
     * @param mask Mask dataset on same grid/data structure as the input dataset
     * @param mult_factors Numerical factors for multiplying each voxel; each voxel is multiplied by both A and B
     * @param option_flag Option flag to do something
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "3dEdu_01_scale" as const,
        "input": input,
        "option_flag": option_flag,
    };
    if (mask !== null) {
        params["mask"] = mask;
    }
    if (mult_factors !== null) {
        params["mult_factors"] = mult_factors;
    }
    return params;
}


function v_3d_edu_01_scale_cargs(
    params: V3dEdu01ScaleParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("3dEdu_01_scale");
    cargs.push(execution.inputFile((params["input"] ?? null)));
    if ((params["mask"] ?? null) !== null) {
        cargs.push(
            "-mask",
            execution.inputFile((params["mask"] ?? null))
        );
    }
    if ((params["mult_factors"] ?? null) !== null) {
        cargs.push(
            "-mult_facs",
            ...(params["mult_factors"] ?? null).map(String)
        );
    }
    if ((params["option_flag"] ?? null)) {
        cargs.push("-some_opt");
    }
    return cargs;
}


function v_3d_edu_01_scale_outputs(
    params: V3dEdu01ScaleParameters,
    execution: Execution,
): V3dEdu01ScaleOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: V3dEdu01ScaleOutputs = {
        root: execution.outputFile("."),
        outfile: execution.outputFile(["OUT_edu_[1-9]*"].join('')),
    };
    return ret;
}


function v_3d_edu_01_scale_execute(
    params: V3dEdu01ScaleParameters,
    execution: Execution,
): V3dEdu01ScaleOutputs {
    /**
     * Educational program to create a new AFNI program. Scales and masks dataset volumes.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `V3dEdu01ScaleOutputs`).
     */
    params = execution.params(params)
    const cargs = v_3d_edu_01_scale_cargs(params, execution)
    const ret = v_3d_edu_01_scale_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function v_3d_edu_01_scale(
    input: InputPathType,
    mask: InputPathType | null = null,
    mult_factors: Array<number> | null = null,
    option_flag: boolean = false,
    runner: Runner | null = null,
): V3dEdu01ScaleOutputs {
    /**
     * Educational program to create a new AFNI program. Scales and masks dataset volumes.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param input Input dataset
     * @param mask Mask dataset on same grid/data structure as the input dataset
     * @param mult_factors Numerical factors for multiplying each voxel; each voxel is multiplied by both A and B
     * @param option_flag Option flag to do something
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `V3dEdu01ScaleOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(V_3D_EDU_01_SCALE_METADATA);
    const params = v_3d_edu_01_scale_params(input, mask, mult_factors, option_flag)
    return v_3d_edu_01_scale_execute(params, execution);
}


export {
      V3dEdu01ScaleOutputs,
      V3dEdu01ScaleParameters,
      V_3D_EDU_01_SCALE_METADATA,
      v_3d_edu_01_scale,
      v_3d_edu_01_scale_params,
};
