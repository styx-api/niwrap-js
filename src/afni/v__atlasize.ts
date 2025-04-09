// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const V__ATLASIZE_METADATA: Metadata = {
    id: "80ebbb960ab74a3ff7041f59da156e4bd3623503.boutiques",
    name: "@Atlasize",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface VAtlasizeParameters {
    "__STYXTYPE__": "@Atlasize";
    "dset"?: InputPathType | null | undefined;
    "space"?: string | null | undefined;
    "lab_file"?: Array<string> | null | undefined;
    "lab_file_delim"?: string | null | undefined;
    "longnames"?: number | null | undefined;
    "last_longname_col"?: number | null | undefined;
    "atlas_type"?: string | null | undefined;
    "atlas_description"?: string | null | undefined;
    "atlas_name"?: string | null | undefined;
    "auto_backup": boolean;
    "centers": boolean;
    "centertype"?: string | null | undefined;
    "centermask"?: InputPathType | null | undefined;
    "skip_novoxels": boolean;
    "h_web": boolean;
    "h_view": boolean;
    "all_opts": boolean;
    "h_find"?: string | null | undefined;
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
        "@Atlasize": v__atlasize_cargs,
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
        "@Atlasize": v__atlasize_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `v__atlasize(...)`.
 *
 * @interface
 */
interface VAtlasizeOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Generated NIML file for the atlas
     */
    niml_file: OutputPathType | null;
}


function v__atlasize_params(
    dset: InputPathType | null = null,
    space: string | null = null,
    lab_file: Array<string> | null = null,
    lab_file_delim: string | null = null,
    longnames: number | null = null,
    last_longname_col: number | null = null,
    atlas_type: string | null = null,
    atlas_description: string | null = null,
    atlas_name: string | null = null,
    auto_backup: boolean = false,
    centers: boolean = false,
    centertype: string | null = null,
    centermask: InputPathType | null = null,
    skip_novoxels: boolean = false,
    h_web: boolean = false,
    h_view: boolean = false,
    all_opts: boolean = false,
    h_find: string | null = null,
): VAtlasizeParameters {
    /**
     * Build parameters.
    
     * @param dset Make DSET an atlas
     * @param space Mark DSET as being in space SPACE
     * @param lab_file Labels and keys are in text file FILE. cLAB is the index of column containing labels, vVAL is the index of column containing keys (1st column is indexed at 0)
     * @param lab_file_delim Set column delimiter for -lab_file option. Default is ' ' (space), but you can set your own. ';' for example.
     * @param longnames Additionally, allow for another column of long names for regions, e.g., amygdala for AMY. cLONGNAME is the starting column for the long name continuing to the last name of the output.
     * @param last_longname_col Limit long names to nth column
     * @param atlas_type Set the atlas type where TP is 'S' for subject-based and 'G' for group-based atlases, respectively.
     * @param atlas_description A description for the atlas. Default is 'My Atlas'
     * @param atlas_name Name for the atlas. Default name is based on prefix of DSET.
     * @param auto_backup Back up the dataset if it already exists in the custom atlas directory and allows an overwrite
     * @param centers Add center of mass coordinates to atlas
     * @param centertype Choose Icent, Dcent, or cm for different ways to compute centers
     * @param centermask Calculate center of mass locations for each ROI using a subset of voxels. Useful for atlases with identical labels in both hemispheres.
     * @param skip_novoxels Skip regions without any voxels in the dataset
     * @param h_web Open webpage with help for this program
     * @param h_view Open -help output in a GUI editor
     * @param all_opts List all of the options for this script
     * @param h_find Search for lines containing WORD in -help output. Search is approximate.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "@Atlasize" as const,
        "auto_backup": auto_backup,
        "centers": centers,
        "skip_novoxels": skip_novoxels,
        "h_web": h_web,
        "h_view": h_view,
        "all_opts": all_opts,
    };
    if (dset !== null) {
        params["dset"] = dset;
    }
    if (space !== null) {
        params["space"] = space;
    }
    if (lab_file !== null) {
        params["lab_file"] = lab_file;
    }
    if (lab_file_delim !== null) {
        params["lab_file_delim"] = lab_file_delim;
    }
    if (longnames !== null) {
        params["longnames"] = longnames;
    }
    if (last_longname_col !== null) {
        params["last_longname_col"] = last_longname_col;
    }
    if (atlas_type !== null) {
        params["atlas_type"] = atlas_type;
    }
    if (atlas_description !== null) {
        params["atlas_description"] = atlas_description;
    }
    if (atlas_name !== null) {
        params["atlas_name"] = atlas_name;
    }
    if (centertype !== null) {
        params["centertype"] = centertype;
    }
    if (centermask !== null) {
        params["centermask"] = centermask;
    }
    if (h_find !== null) {
        params["h_find"] = h_find;
    }
    return params;
}


function v__atlasize_cargs(
    params: VAtlasizeParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("@Atlasize");
    if ((params["dset"] ?? null) !== null) {
        cargs.push(
            "-dset",
            execution.inputFile((params["dset"] ?? null))
        );
    }
    if ((params["space"] ?? null) !== null) {
        cargs.push(
            "-space",
            (params["space"] ?? null)
        );
    }
    if ((params["lab_file"] ?? null) !== null) {
        cargs.push(
            "-lab_file",
            ...(params["lab_file"] ?? null)
        );
    }
    if ((params["lab_file_delim"] ?? null) !== null) {
        cargs.push(
            "-lab_file_delim",
            (params["lab_file_delim"] ?? null)
        );
    }
    if ((params["longnames"] ?? null) !== null) {
        cargs.push(
            "-longnames",
            String((params["longnames"] ?? null))
        );
    }
    if ((params["last_longname_col"] ?? null) !== null) {
        cargs.push(
            "-last_longname_col",
            String((params["last_longname_col"] ?? null))
        );
    }
    if ((params["atlas_type"] ?? null) !== null) {
        cargs.push(
            "-atlas_type",
            (params["atlas_type"] ?? null)
        );
    }
    if ((params["atlas_description"] ?? null) !== null) {
        cargs.push(
            "-atlas_description",
            (params["atlas_description"] ?? null)
        );
    }
    if ((params["atlas_name"] ?? null) !== null) {
        cargs.push(
            "-atlas_name",
            (params["atlas_name"] ?? null)
        );
    }
    if ((params["auto_backup"] ?? null)) {
        cargs.push("-auto_backup");
    }
    if ((params["centers"] ?? null)) {
        cargs.push("-centers");
    }
    if ((params["centertype"] ?? null) !== null) {
        cargs.push(
            "-centertype",
            (params["centertype"] ?? null)
        );
    }
    if ((params["centermask"] ?? null) !== null) {
        cargs.push(
            "-centermask",
            execution.inputFile((params["centermask"] ?? null))
        );
    }
    if ((params["skip_novoxels"] ?? null)) {
        cargs.push("-skip_novoxels");
    }
    if ((params["h_web"] ?? null)) {
        cargs.push("-h_web");
    }
    if ((params["h_view"] ?? null)) {
        cargs.push("-h_view");
    }
    if ((params["all_opts"] ?? null)) {
        cargs.push("-all_opts");
    }
    if ((params["h_find"] ?? null) !== null) {
        cargs.push(
            "-h_find",
            (params["h_find"] ?? null)
        );
    }
    return cargs;
}


function v__atlasize_outputs(
    params: VAtlasizeParameters,
    execution: Execution,
): VAtlasizeOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: VAtlasizeOutputs = {
        root: execution.outputFile("."),
        niml_file: ((params["dset"] ?? null) !== null) ? execution.outputFile([path.basename((params["dset"] ?? null)), ".niml"].join('')) : null,
    };
    return ret;
}


function v__atlasize_execute(
    params: VAtlasizeParameters,
    execution: Execution,
): VAtlasizeOutputs {
    /**
     * Script to turn a volumetric dataset into an AFNI atlas.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `VAtlasizeOutputs`).
     */
    params = execution.params(params)
    const cargs = v__atlasize_cargs(params, execution)
    const ret = v__atlasize_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function v__atlasize(
    dset: InputPathType | null = null,
    space: string | null = null,
    lab_file: Array<string> | null = null,
    lab_file_delim: string | null = null,
    longnames: number | null = null,
    last_longname_col: number | null = null,
    atlas_type: string | null = null,
    atlas_description: string | null = null,
    atlas_name: string | null = null,
    auto_backup: boolean = false,
    centers: boolean = false,
    centertype: string | null = null,
    centermask: InputPathType | null = null,
    skip_novoxels: boolean = false,
    h_web: boolean = false,
    h_view: boolean = false,
    all_opts: boolean = false,
    h_find: string | null = null,
    runner: Runner | null = null,
): VAtlasizeOutputs {
    /**
     * Script to turn a volumetric dataset into an AFNI atlas.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param dset Make DSET an atlas
     * @param space Mark DSET as being in space SPACE
     * @param lab_file Labels and keys are in text file FILE. cLAB is the index of column containing labels, vVAL is the index of column containing keys (1st column is indexed at 0)
     * @param lab_file_delim Set column delimiter for -lab_file option. Default is ' ' (space), but you can set your own. ';' for example.
     * @param longnames Additionally, allow for another column of long names for regions, e.g., amygdala for AMY. cLONGNAME is the starting column for the long name continuing to the last name of the output.
     * @param last_longname_col Limit long names to nth column
     * @param atlas_type Set the atlas type where TP is 'S' for subject-based and 'G' for group-based atlases, respectively.
     * @param atlas_description A description for the atlas. Default is 'My Atlas'
     * @param atlas_name Name for the atlas. Default name is based on prefix of DSET.
     * @param auto_backup Back up the dataset if it already exists in the custom atlas directory and allows an overwrite
     * @param centers Add center of mass coordinates to atlas
     * @param centertype Choose Icent, Dcent, or cm for different ways to compute centers
     * @param centermask Calculate center of mass locations for each ROI using a subset of voxels. Useful for atlases with identical labels in both hemispheres.
     * @param skip_novoxels Skip regions without any voxels in the dataset
     * @param h_web Open webpage with help for this program
     * @param h_view Open -help output in a GUI editor
     * @param all_opts List all of the options for this script
     * @param h_find Search for lines containing WORD in -help output. Search is approximate.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `VAtlasizeOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(V__ATLASIZE_METADATA);
    const params = v__atlasize_params(dset, space, lab_file, lab_file_delim, longnames, last_longname_col, atlas_type, atlas_description, atlas_name, auto_backup, centers, centertype, centermask, skip_novoxels, h_web, h_view, all_opts, h_find)
    return v__atlasize_execute(params, execution);
}


export {
      VAtlasizeOutputs,
      VAtlasizeParameters,
      V__ATLASIZE_METADATA,
      v__atlasize,
      v__atlasize_params,
};
