// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const V__ALIGN_CENTERS_METADATA: Metadata = {
    id: "33d48e001912a44e2935434b56014a343a7f22f0.boutiques",
    name: "@Align_Centers",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface VAlignCentersParameters {
    "__STYXTYPE__": "@Align_Centers";
    "base": InputPathType;
    "dset": InputPathType;
    "children"?: Array<InputPathType> | null | undefined;
    "echo": boolean;
    "overwrite": boolean;
    "prefix"?: string | null | undefined;
    "matrix_only": boolean;
    "matrix_only_no_dset": boolean;
    "no_cp": boolean;
    "center_grid": boolean;
    "center_cm": boolean;
    "center_cm_no_amask": boolean;
    "shift_xform"?: InputPathType | null | undefined;
    "shift_xform_inv"?: InputPathType | null | undefined;
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
        "@Align_Centers": v__align_centers_cargs,
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
        "@Align_Centers": v__align_centers_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `v__align_centers(...)`.
 *
 * @interface
 */
interface VAlignCentersOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Transform matrix needed for the shift applied to DSET.
     */
    transform_matrix: OutputPathType;
    /**
     * Shifted Dataset aligned with the base volume.
     */
    shifted_dset: OutputPathType | null;
    /**
     * Shifted child datasets aligned with the base volume.
     */
    shifted_child_dsets: OutputPathType | null;
}


function v__align_centers_params(
    base: InputPathType,
    dset: InputPathType,
    children: Array<InputPathType> | null = null,
    echo: boolean = false,
    overwrite: boolean = false,
    prefix: string | null = null,
    matrix_only: boolean = false,
    matrix_only_no_dset: boolean = false,
    no_cp: boolean = false,
    center_grid: boolean = false,
    center_cm: boolean = false,
    center_cm_no_amask: boolean = false,
    shift_xform: InputPathType | null = null,
    shift_xform_inv: InputPathType | null = null,
): VAlignCentersParameters {
    /**
     * Build parameters.
    
     * @param base Base volume, typically a template. Can also specify RAI coordinates for center alignment.
     * @param dset Dataset to be aligned to BASE.
     * @param children Additional datasets (originally in register with DSET) that should be shifted in the same way.
     * @param echo Echo all commands to terminal for debugging.
     * @param overwrite Overwrite existing output files.
     * @param prefix Custom prefix for the result files.
     * @param matrix_only Only output the transform needed to align the centers without shifting any child volumes.
     * @param matrix_only_no_dset Like -1Dmat_only, but no datasets are created or changed.
     * @param no_cp Do not create new data; shift existing ones. Use with caution.
     * @param center_grid Center is that of the volume's grid (default).
     * @param center_cm Center is the center of mass of the volume.
     * @param center_cm_no_amask Like -cm, but with no automask.
     * @param shift_xform Apply shift translation from a 1D file.
     * @param shift_xform_inv Apply inverse of shift translation from a 1D file.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "@Align_Centers" as const,
        "base": base,
        "dset": dset,
        "echo": echo,
        "overwrite": overwrite,
        "matrix_only": matrix_only,
        "matrix_only_no_dset": matrix_only_no_dset,
        "no_cp": no_cp,
        "center_grid": center_grid,
        "center_cm": center_cm,
        "center_cm_no_amask": center_cm_no_amask,
    };
    if (children !== null) {
        params["children"] = children;
    }
    if (prefix !== null) {
        params["prefix"] = prefix;
    }
    if (shift_xform !== null) {
        params["shift_xform"] = shift_xform;
    }
    if (shift_xform_inv !== null) {
        params["shift_xform_inv"] = shift_xform_inv;
    }
    return params;
}


function v__align_centers_cargs(
    params: VAlignCentersParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("@Align_Centers");
    cargs.push(execution.inputFile((params["base"] ?? null)));
    cargs.push(execution.inputFile((params["dset"] ?? null)));
    if ((params["children"] ?? null) !== null) {
        cargs.push(
            "-child",
            ...(params["children"] ?? null).map(f => execution.inputFile(f))
        );
    }
    if ((params["echo"] ?? null)) {
        cargs.push("-echo");
    }
    if ((params["overwrite"] ?? null)) {
        cargs.push("-overwrite");
    }
    if ((params["prefix"] ?? null) !== null) {
        cargs.push(
            "-prefix",
            (params["prefix"] ?? null)
        );
    }
    if ((params["matrix_only"] ?? null)) {
        cargs.push("-1Dmat_only");
    }
    if ((params["matrix_only_no_dset"] ?? null)) {
        cargs.push("-1Dmat_only_nodset");
    }
    if ((params["no_cp"] ?? null)) {
        cargs.push("-no_cp");
    }
    if ((params["center_grid"] ?? null)) {
        cargs.push("-grid");
    }
    if ((params["center_cm"] ?? null)) {
        cargs.push("-cm");
    }
    if ((params["center_cm_no_amask"] ?? null)) {
        cargs.push("-cm_no_amask");
    }
    if ((params["shift_xform"] ?? null) !== null) {
        cargs.push(
            "-shift_xform",
            execution.inputFile((params["shift_xform"] ?? null))
        );
    }
    if ((params["shift_xform_inv"] ?? null) !== null) {
        cargs.push(
            "-shift_xform_inv",
            execution.inputFile((params["shift_xform_inv"] ?? null))
        );
    }
    return cargs;
}


function v__align_centers_outputs(
    params: VAlignCentersParameters,
    execution: Execution,
): VAlignCentersOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: VAlignCentersOutputs = {
        root: execution.outputFile("."),
        transform_matrix: execution.outputFile([path.basename((params["dset"] ?? null)), "_shft.1D"].join('')),
        shifted_dset: ((params["prefix"] ?? null) !== null) ? execution.outputFile([(params["prefix"] ?? null), "_shft+orig.BRIK"].join('')) : null,
        shifted_child_dsets: ((params["prefix"] ?? null) !== null) ? execution.outputFile([(params["prefix"] ?? null), "_child_shft+orig.BRIK"].join('')) : null,
    };
    return ret;
}


function v__align_centers_execute(
    params: VAlignCentersParameters,
    execution: Execution,
): VAlignCentersOutputs {
    /**
     * Moves the center of a dataset (DSET) to the center of a base volume (BASE) and optionally creates a transform matrix.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `VAlignCentersOutputs`).
     */
    params = execution.params(params)
    const cargs = v__align_centers_cargs(params, execution)
    const ret = v__align_centers_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function v__align_centers(
    base: InputPathType,
    dset: InputPathType,
    children: Array<InputPathType> | null = null,
    echo: boolean = false,
    overwrite: boolean = false,
    prefix: string | null = null,
    matrix_only: boolean = false,
    matrix_only_no_dset: boolean = false,
    no_cp: boolean = false,
    center_grid: boolean = false,
    center_cm: boolean = false,
    center_cm_no_amask: boolean = false,
    shift_xform: InputPathType | null = null,
    shift_xform_inv: InputPathType | null = null,
    runner: Runner | null = null,
): VAlignCentersOutputs {
    /**
     * Moves the center of a dataset (DSET) to the center of a base volume (BASE) and optionally creates a transform matrix.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param base Base volume, typically a template. Can also specify RAI coordinates for center alignment.
     * @param dset Dataset to be aligned to BASE.
     * @param children Additional datasets (originally in register with DSET) that should be shifted in the same way.
     * @param echo Echo all commands to terminal for debugging.
     * @param overwrite Overwrite existing output files.
     * @param prefix Custom prefix for the result files.
     * @param matrix_only Only output the transform needed to align the centers without shifting any child volumes.
     * @param matrix_only_no_dset Like -1Dmat_only, but no datasets are created or changed.
     * @param no_cp Do not create new data; shift existing ones. Use with caution.
     * @param center_grid Center is that of the volume's grid (default).
     * @param center_cm Center is the center of mass of the volume.
     * @param center_cm_no_amask Like -cm, but with no automask.
     * @param shift_xform Apply shift translation from a 1D file.
     * @param shift_xform_inv Apply inverse of shift translation from a 1D file.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `VAlignCentersOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(V__ALIGN_CENTERS_METADATA);
    const params = v__align_centers_params(base, dset, children, echo, overwrite, prefix, matrix_only, matrix_only_no_dset, no_cp, center_grid, center_cm, center_cm_no_amask, shift_xform, shift_xform_inv)
    return v__align_centers_execute(params, execution);
}


export {
      VAlignCentersOutputs,
      VAlignCentersParameters,
      V__ALIGN_CENTERS_METADATA,
      v__align_centers,
      v__align_centers_params,
};
