// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const V__SURF_TO_VOL_SPACKLE_METADATA: Metadata = {
    id: "b0444f30cf6b3a9a0996f5b8c66a1134d87d5052.boutiques",
    name: "@surf_to_vol_spackle",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface VSurfToVolSpackleParameters {
    "__STYXTYPE__": "@surf_to_vol_spackle";
    "maskset": InputPathType;
    "spec": InputPathType;
    "surfA": string;
    "surfB"?: string | null | undefined;
    "surfset": InputPathType;
    "prefix": string;
    "normal_vector_length"?: number | null | undefined;
    "search_radius"?: number | null | undefined;
    "num_steps"?: number | null | undefined;
    "keep_temp_files": boolean;
    "max_iters"?: number | null | undefined;
    "use_mode": boolean;
    "datum_type"?: string | null | undefined;
    "ignore_unknown_options": boolean;
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
        "@surf_to_vol_spackle": v__surf_to_vol_spackle_cargs,
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
        "@surf_to_vol_spackle": v__surf_to_vol_spackle_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `v__surf_to_vol_spackle(...)`.
 *
 * @interface
 */
interface VSurfToVolSpackleOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * The primary output volume file with surface measures projected.
     */
    output_volume: OutputPathType;
}


function v__surf_to_vol_spackle_params(
    maskset: InputPathType,
    spec: InputPathType,
    surf_a: string,
    surfset: InputPathType,
    prefix: string,
    surf_b: string | null = null,
    normal_vector_length: number | null = null,
    search_radius: number | null = null,
    num_steps: number | null = null,
    keep_temp_files: boolean = false,
    max_iters: number | null = null,
    use_mode: boolean = false,
    datum_type: string | null = null,
    ignore_unknown_options: boolean = false,
): VSurfToVolSpackleParameters {
    /**
     * Build parameters.
    
     * @param maskset Mask dataset in which to project surface measures.
     * @param spec Surface specification file with list of surfaces.
     * @param surf_a Name of the first surface, e.g., smoothwm, pial, etc.
     * @param surfset Dataset of surface measures.
     * @param prefix Basename of output. Final name used is prefix.nii.gz.
     * @param surf_b Name of the second surface. If not included, computes using normal vector.
     * @param normal_vector_length Normal vector length if only using a single surface (default 2 mm).
     * @param search_radius Radius for search for mean to fill holes (default 2 mm).
     * @param num_steps Number of steps on line segments (default 10).
     * @param keep_temp_files Do not remove any of the temporary files (default is to remove them).
     * @param max_iters Maximum number of smoothing and filling iterations (default is 4).
     * @param use_mode Use mode instead of non-zero median (appropriate for ROIs).
     * @param datum_type Set datum type to byte, short, or float instead of maskset type. Mode triggers -datum short.
     * @param ignore_unknown_options Ignore additional options that are not needed.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "@surf_to_vol_spackle" as const,
        "maskset": maskset,
        "spec": spec,
        "surfA": surf_a,
        "surfset": surfset,
        "prefix": prefix,
        "keep_temp_files": keep_temp_files,
        "use_mode": use_mode,
        "ignore_unknown_options": ignore_unknown_options,
    };
    if (surf_b !== null) {
        params["surfB"] = surf_b;
    }
    if (normal_vector_length !== null) {
        params["normal_vector_length"] = normal_vector_length;
    }
    if (search_radius !== null) {
        params["search_radius"] = search_radius;
    }
    if (num_steps !== null) {
        params["num_steps"] = num_steps;
    }
    if (max_iters !== null) {
        params["max_iters"] = max_iters;
    }
    if (datum_type !== null) {
        params["datum_type"] = datum_type;
    }
    return params;
}


function v__surf_to_vol_spackle_cargs(
    params: VSurfToVolSpackleParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("@surf_to_vol_spackle");
    cargs.push(execution.inputFile((params["maskset"] ?? null)));
    cargs.push(execution.inputFile((params["spec"] ?? null)));
    cargs.push((params["surfA"] ?? null));
    if ((params["surfB"] ?? null) !== null) {
        cargs.push((params["surfB"] ?? null));
    }
    cargs.push(execution.inputFile((params["surfset"] ?? null)));
    cargs.push((params["prefix"] ?? null));
    if ((params["normal_vector_length"] ?? null) !== null) {
        cargs.push(
            "-f_pn_mm",
            String((params["normal_vector_length"] ?? null))
        );
    }
    if ((params["search_radius"] ?? null) !== null) {
        cargs.push(
            "-meanrad",
            String((params["search_radius"] ?? null))
        );
    }
    if ((params["num_steps"] ?? null) !== null) {
        cargs.push(
            "-nsteps",
            String((params["num_steps"] ?? null))
        );
    }
    if ((params["keep_temp_files"] ?? null)) {
        cargs.push("-keep_temp_files");
    }
    if ((params["max_iters"] ?? null) !== null) {
        cargs.push(
            "-maxiters",
            String((params["max_iters"] ?? null))
        );
    }
    if ((params["use_mode"] ?? null)) {
        cargs.push("-mode");
    }
    if ((params["datum_type"] ?? null) !== null) {
        cargs.push(
            "-datum",
            (params["datum_type"] ?? null)
        );
    }
    if ((params["ignore_unknown_options"] ?? null)) {
        cargs.push("-ignore_unknown_options");
    }
    return cargs;
}


function v__surf_to_vol_spackle_outputs(
    params: VSurfToVolSpackleParameters,
    execution: Execution,
): VSurfToVolSpackleOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: VSurfToVolSpackleOutputs = {
        root: execution.outputFile("."),
        output_volume: execution.outputFile([(params["prefix"] ?? null), ".nii.gz"].join('')),
    };
    return ret;
}


function v__surf_to_vol_spackle_execute(
    params: VSurfToVolSpackleParameters,
    execution: Execution,
): VSurfToVolSpackleOutputs {
    /**
     * Project data from a surface dataset into a volume primarily using 3dSurf2Vol but then filling any holes with an iterative smoothing procedure.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `VSurfToVolSpackleOutputs`).
     */
    params = execution.params(params)
    const cargs = v__surf_to_vol_spackle_cargs(params, execution)
    const ret = v__surf_to_vol_spackle_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function v__surf_to_vol_spackle(
    maskset: InputPathType,
    spec: InputPathType,
    surf_a: string,
    surfset: InputPathType,
    prefix: string,
    surf_b: string | null = null,
    normal_vector_length: number | null = null,
    search_radius: number | null = null,
    num_steps: number | null = null,
    keep_temp_files: boolean = false,
    max_iters: number | null = null,
    use_mode: boolean = false,
    datum_type: string | null = null,
    ignore_unknown_options: boolean = false,
    runner: Runner | null = null,
): VSurfToVolSpackleOutputs {
    /**
     * Project data from a surface dataset into a volume primarily using 3dSurf2Vol but then filling any holes with an iterative smoothing procedure.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param maskset Mask dataset in which to project surface measures.
     * @param spec Surface specification file with list of surfaces.
     * @param surf_a Name of the first surface, e.g., smoothwm, pial, etc.
     * @param surfset Dataset of surface measures.
     * @param prefix Basename of output. Final name used is prefix.nii.gz.
     * @param surf_b Name of the second surface. If not included, computes using normal vector.
     * @param normal_vector_length Normal vector length if only using a single surface (default 2 mm).
     * @param search_radius Radius for search for mean to fill holes (default 2 mm).
     * @param num_steps Number of steps on line segments (default 10).
     * @param keep_temp_files Do not remove any of the temporary files (default is to remove them).
     * @param max_iters Maximum number of smoothing and filling iterations (default is 4).
     * @param use_mode Use mode instead of non-zero median (appropriate for ROIs).
     * @param datum_type Set datum type to byte, short, or float instead of maskset type. Mode triggers -datum short.
     * @param ignore_unknown_options Ignore additional options that are not needed.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `VSurfToVolSpackleOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(V__SURF_TO_VOL_SPACKLE_METADATA);
    const params = v__surf_to_vol_spackle_params(maskset, spec, surf_a, surfset, prefix, surf_b, normal_vector_length, search_radius, num_steps, keep_temp_files, max_iters, use_mode, datum_type, ignore_unknown_options)
    return v__surf_to_vol_spackle_execute(params, execution);
}


export {
      VSurfToVolSpackleOutputs,
      VSurfToVolSpackleParameters,
      V__SURF_TO_VOL_SPACKLE_METADATA,
      v__surf_to_vol_spackle,
      v__surf_to_vol_spackle_params,
};
