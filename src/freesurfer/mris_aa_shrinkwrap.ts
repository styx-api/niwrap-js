// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MRIS_AA_SHRINKWRAP_METADATA: Metadata = {
    id: "35496254b602549d226c6de261156b86767e1155.boutiques",
    name: "mris_AA_shrinkwrap",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface MrisAaShrinkwrapParameters {
    "__STYXTYPE__": "mris_AA_shrinkwrap";
    "t1_vol": InputPathType;
    "pd_vol": InputPathType;
    "output_dir": string;
    "omit_self_intersection": boolean;
    "create_curvature_area": boolean;
    "average_curvature"?: number | null | undefined;
    "white_only": boolean;
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
        "mris_AA_shrinkwrap": mris_aa_shrinkwrap_cargs,
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
 * Output object returned when calling `mris_aa_shrinkwrap(...)`.
 *
 * @interface
 */
interface MrisAaShrinkwrapOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function mris_aa_shrinkwrap_params(
    t1_vol: InputPathType,
    pd_vol: InputPathType,
    output_dir: string,
    omit_self_intersection: boolean = false,
    create_curvature_area: boolean = false,
    average_curvature: number | null = 10,
    white_only: boolean = false,
): MrisAaShrinkwrapParameters {
    /**
     * Build parameters.
    
     * @param t1_vol T1 volume file
     * @param pd_vol PD volume file
     * @param output_dir Output directory
     * @param omit_self_intersection Omit self-intersection and only generate gray/white surface
     * @param create_curvature_area Create curvature and area files from white matter surface
     * @param average_curvature Average curvature values a specified number of times (default=10)
     * @param white_only Only generate white matter surface
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "mris_AA_shrinkwrap" as const,
        "t1_vol": t1_vol,
        "pd_vol": pd_vol,
        "output_dir": output_dir,
        "omit_self_intersection": omit_self_intersection,
        "create_curvature_area": create_curvature_area,
        "white_only": white_only,
    };
    if (average_curvature !== null) {
        params["average_curvature"] = average_curvature;
    }
    return params;
}


function mris_aa_shrinkwrap_cargs(
    params: MrisAaShrinkwrapParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("mris_AA_shrinkwrap");
    cargs.push(execution.inputFile((params["t1_vol"] ?? null)));
    cargs.push(execution.inputFile((params["pd_vol"] ?? null)));
    cargs.push((params["output_dir"] ?? null));
    if ((params["omit_self_intersection"] ?? null)) {
        cargs.push("-q");
    }
    if ((params["create_curvature_area"] ?? null)) {
        cargs.push("-c");
    }
    if ((params["average_curvature"] ?? null) !== null) {
        cargs.push(
            "-a",
            String((params["average_curvature"] ?? null))
        );
    }
    if ((params["white_only"] ?? null)) {
        cargs.push("-whiteonly");
    }
    return cargs;
}


function mris_aa_shrinkwrap_outputs(
    params: MrisAaShrinkwrapParameters,
    execution: Execution,
): MrisAaShrinkwrapOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MrisAaShrinkwrapOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function mris_aa_shrinkwrap_execute(
    params: MrisAaShrinkwrapParameters,
    execution: Execution,
): MrisAaShrinkwrapOutputs {
    /**
     * This program positions the tessellation of the cortical surface at the white matter surface, then the gray matter surface and generates surface files for these surfaces as well as a 'curvature' file for the cortical thickness, and a surface file which approximates layer IV of the cortical sheet.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MrisAaShrinkwrapOutputs`).
     */
    params = execution.params(params)
    const cargs = mris_aa_shrinkwrap_cargs(params, execution)
    const ret = mris_aa_shrinkwrap_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function mris_aa_shrinkwrap(
    t1_vol: InputPathType,
    pd_vol: InputPathType,
    output_dir: string,
    omit_self_intersection: boolean = false,
    create_curvature_area: boolean = false,
    average_curvature: number | null = 10,
    white_only: boolean = false,
    runner: Runner | null = null,
): MrisAaShrinkwrapOutputs {
    /**
     * This program positions the tessellation of the cortical surface at the white matter surface, then the gray matter surface and generates surface files for these surfaces as well as a 'curvature' file for the cortical thickness, and a surface file which approximates layer IV of the cortical sheet.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param t1_vol T1 volume file
     * @param pd_vol PD volume file
     * @param output_dir Output directory
     * @param omit_self_intersection Omit self-intersection and only generate gray/white surface
     * @param create_curvature_area Create curvature and area files from white matter surface
     * @param average_curvature Average curvature values a specified number of times (default=10)
     * @param white_only Only generate white matter surface
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MrisAaShrinkwrapOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MRIS_AA_SHRINKWRAP_METADATA);
    const params = mris_aa_shrinkwrap_params(t1_vol, pd_vol, output_dir, omit_self_intersection, create_curvature_area, average_curvature, white_only)
    return mris_aa_shrinkwrap_execute(params, execution);
}


export {
      MRIS_AA_SHRINKWRAP_METADATA,
      MrisAaShrinkwrapOutputs,
      MrisAaShrinkwrapParameters,
      mris_aa_shrinkwrap,
      mris_aa_shrinkwrap_params,
};
