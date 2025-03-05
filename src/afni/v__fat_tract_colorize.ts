// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const V__FAT_TRACT_COLORIZE_METADATA: Metadata = {
    id: "08df2223341e8a3953edfe06cc72302451f3e2c8.boutiques",
    name: "@fat_tract_colorize",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface VFatTractColorizeParameters {
    "__STYXTYPE__": "@fat_tract_colorize";
    "in_fa": InputPathType;
    "in_v1": InputPathType;
    "in_tracts": string;
    "prefix": string;
    "in_ulay"?: InputPathType | null | undefined;
    "no_view": boolean;
    "only_view": boolean;
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
        "@fat_tract_colorize": v__fat_tract_colorize_cargs,
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
        "@fat_tract_colorize": v__fat_tract_colorize_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `v__fat_tract_colorize(...)`.
 *
 * @interface
 */
interface VFatTractColorizeOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * HSL coloration volume file with four bricks from the V1 and FA volumes: Hue, Saturation, Luminosity, and Brightness
     */
    output_hue_volume: OutputPathType;
    /**
     * Slightly smoothed isosurface file made by IsoSurface
     */
    output_iso_surface: OutputPathType;
    /**
     * Spec file made by quickspec
     */
    output_iso_spec: OutputPathType;
    /**
     * Projection of appropriate coloration onto the surface
     */
    output_proj_surface: OutputPathType;
}


function v__fat_tract_colorize_params(
    in_fa: InputPathType,
    in_v1: InputPathType,
    in_tracts: string,
    prefix: string,
    in_ulay: InputPathType | null = null,
    no_view: boolean = false,
    only_view: boolean = false,
): VFatTractColorizeParameters {
    /**
     * Build parameters.
    
     * @param in_fa FA values of the DT fitting, used to modulate the brightness of the RGB coloration.
     * @param in_v1 First eigenvector of the DT fitting. A unit vector volume with 3 components (0-1 range).
     * @param in_tracts The INDIMAP or PAIRMAP file output by 3dTrackID, specifying the subbrick if >1 (e.g., NAME_INDIMAP+orig'[0]').
     * @param prefix Prefix for all output files.
     * @param in_ulay Optional underlay dataset for AFNI/SUMA viewing. Default is to use the FA dataset.
     * @param no_view Turn off auto-running of AFNI_SUMA commands to view the output immediately.
     * @param only_view Only view the data with AFNI+SUMA, assuming the command has been run before.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "@fat_tract_colorize" as const,
        "in_fa": in_fa,
        "in_v1": in_v1,
        "in_tracts": in_tracts,
        "prefix": prefix,
        "no_view": no_view,
        "only_view": only_view,
    };
    if (in_ulay !== null) {
        params["in_ulay"] = in_ulay;
    }
    return params;
}


function v__fat_tract_colorize_cargs(
    params: VFatTractColorizeParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("@fat_tract_colorize");
    cargs.push(
        "-in_fa",
        execution.inputFile((params["in_fa"] ?? null))
    );
    cargs.push(
        "-in_v1",
        execution.inputFile((params["in_v1"] ?? null))
    );
    cargs.push(
        "-in_tracts",
        (params["in_tracts"] ?? null)
    );
    cargs.push(
        "-prefix",
        (params["prefix"] ?? null)
    );
    if ((params["in_ulay"] ?? null) !== null) {
        cargs.push(
            "-in_ulay",
            execution.inputFile((params["in_ulay"] ?? null))
        );
    }
    if ((params["no_view"] ?? null)) {
        cargs.push("-no_view");
    }
    if ((params["only_view"] ?? null)) {
        cargs.push("-only_view");
    }
    return cargs;
}


function v__fat_tract_colorize_outputs(
    params: VFatTractColorizeParameters,
    execution: Execution,
): VFatTractColorizeOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: VFatTractColorizeOutputs = {
        root: execution.outputFile("."),
        output_hue_volume: execution.outputFile([(params["prefix"] ?? null), "_RGB_HUE.nii.gz"].join('')),
        output_iso_surface: execution.outputFile([(params["prefix"] ?? null), "_RGB_iso.ply"].join('')),
        output_iso_spec: execution.outputFile([(params["prefix"] ?? null), "_RGB_iso.spec"].join('')),
        output_proj_surface: execution.outputFile([(params["prefix"] ?? null), "_RGB.niml.dset"].join('')),
    };
    return ret;
}


function v__fat_tract_colorize_execute(
    params: VFatTractColorizeParameters,
    execution: Execution,
): VFatTractColorizeOutputs {
    /**
     * Visualize tractographic output from 3dTrackID, particularly in probabilistic mode.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `VFatTractColorizeOutputs`).
     */
    params = execution.params(params)
    const cargs = v__fat_tract_colorize_cargs(params, execution)
    const ret = v__fat_tract_colorize_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function v__fat_tract_colorize(
    in_fa: InputPathType,
    in_v1: InputPathType,
    in_tracts: string,
    prefix: string,
    in_ulay: InputPathType | null = null,
    no_view: boolean = false,
    only_view: boolean = false,
    runner: Runner | null = null,
): VFatTractColorizeOutputs {
    /**
     * Visualize tractographic output from 3dTrackID, particularly in probabilistic mode.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param in_fa FA values of the DT fitting, used to modulate the brightness of the RGB coloration.
     * @param in_v1 First eigenvector of the DT fitting. A unit vector volume with 3 components (0-1 range).
     * @param in_tracts The INDIMAP or PAIRMAP file output by 3dTrackID, specifying the subbrick if >1 (e.g., NAME_INDIMAP+orig'[0]').
     * @param prefix Prefix for all output files.
     * @param in_ulay Optional underlay dataset for AFNI/SUMA viewing. Default is to use the FA dataset.
     * @param no_view Turn off auto-running of AFNI_SUMA commands to view the output immediately.
     * @param only_view Only view the data with AFNI+SUMA, assuming the command has been run before.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `VFatTractColorizeOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(V__FAT_TRACT_COLORIZE_METADATA);
    const params = v__fat_tract_colorize_params(in_fa, in_v1, in_tracts, prefix, in_ulay, no_view, only_view)
    return v__fat_tract_colorize_execute(params, execution);
}


export {
      VFatTractColorizeOutputs,
      VFatTractColorizeParameters,
      V__FAT_TRACT_COLORIZE_METADATA,
      v__fat_tract_colorize,
      v__fat_tract_colorize_params,
};
